import React, { Component } from "react";
import { firebase } from "../firebase";

import './DisplayPost.css'

class DisplayPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const postRef = firebase.db.ref("posts");
    postRef.on("value", snapshot => {
      let posts = snapshot.val();
      let newState = [];
      for (let post in posts) {
        newState.push({
          id: post,
          postText: posts[post].postText,
          user: posts[post].user
        });
      }
      this.setState({
        posts: newState
      });
    });
  }

  removePost(postId) {
    const postRef = firebase.db.ref(`/posts/${postId}`);
    postRef.remove();
  }

  render() {
    return (
      <section className="col-8 offset-2 col-md-6 offset-md-0">
        <div className="display-posts">
          <ul>
            {this.state.posts
              .map(post => {
                return (
                  <li key={post.id}>
                    <p className="text-color">{post.user}</p>
                    <p className="bolder">{post.postText}</p>
                    <hr/>
                    {post.user === (this.props.user.displayName ||
                    this.props.user.email) ? (
                      <button className="button-post" onClick={() => this.removePost(post.id)}>
                        Borrar
                      </button>
                    ) : null }
                  </li>
                );
              })
              .reverse()}
          </ul>
        </div>
      </section>
    );
  }
}

export default DisplayPost;
