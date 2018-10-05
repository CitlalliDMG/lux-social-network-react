import React, { Component } from "react";
import Navigation from "./Navigation";
import PostInput from "./PostInput";
import DisplayPost from "./DisplayPost";

class HomePage extends Component {
  constructor() {
    super();
    console.log("App - Constructor");
  }

  render() {
    return (
      <div className="container">
        <Navigation />
        <PostInput />
        <DisplayPost />
      </div>
    );
  }
}

export default HomePage;
