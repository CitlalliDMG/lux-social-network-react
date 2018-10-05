import React, { Component } from "react";
import { firebase } from "../firebase";

class DisplayPost extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const postRef = firebase.db.ref('posts');
    postRef.on('value', (snapshot) => {
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
      <section className="display-item">
        <div className="wrapper">
          <ul>
            {this.state.posts.map((post) => {
              return (
                <li key={post.id}>
                  <h3>{post.postText}</h3>
                  <p>Posteado por: {post.user}</p>
                  <button onClick={() => this.removePost(post.id)}>Borrar</button>
                </li>
              )
            }).reverse()
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default DisplayPost;
