import React, { Component } from "react";
import { firebase } from "../firebase";

class PostInput extends Component {
  constructor() {
    super()
    this.state = {
      currentPost: "",
      username: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const postRef = firebase.db.ref('posts');
    const post = {
      postText: this.state.currentPost,
      user: this.state.username
    }
    postRef.push(post);
    this.setState({
      currentPost:'',
      username: ''
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <section className="add-item">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="What's your name?"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="text"
            name="currentPost"
            placeholder="What are you bringing?"
            onChange={this.handleChange}
            value={this.state.currentPost}
          />
          <button>Add Item</button>
        </form>
      </section>
    );
  }
}

export default PostInput;
