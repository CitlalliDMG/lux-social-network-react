import React, { Component } from "react";
import { firebase } from "../firebase";

class PostInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: "",
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const postRef = firebase.db.ref("posts");
    const post = {
      postText: this.state.currentPost,
      user: this.props.user.displayName || this.props.user.email
    };
    postRef.push(post);
    this.setState({
      currentPost: "",
      username: ""
    });
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
          <h3>¿Qué te dio luz este día?</h3>
          <input
            type="text"
            name="currentPost"
            placeholder="Escribelo aquí"
            onChange={this.handleChange}
            value={this.state.currentPost}
          />
          <button>Compartir</button>
        </form>
      </section>
    );
  }
}

export default PostInput;
