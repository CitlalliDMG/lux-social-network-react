import React, { Component } from "react";
import { firebase, auth } from '../firebase';

import Navigation from "./Navigation";
import PostInput from "./PostInput";
import DisplayPost from "./DisplayPost";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }
    });
  }

  logout = () => {
    console.log('Entro a logout');
    auth.doSignOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login = async () => {
    console.log('Entro a login');
    await firebase.auth.signInWithRedirect(firebase.provider)
    .then(result => {
      const user = result.user;
      this.setState({user})
    })
  }

  render() {
    return (
      <div className="container">
        <Navigation onLogin={this.login} onLogout={this.logout} user={this.state.user} />
        {this.state.user ?
        <div>
        <PostInput user={this.state.user} />
        <DisplayPost user={this.state.user} />
        </div>
        :
        <div className="wrapper">
        <p>Necesitas iniciar sesión para ver el contenido de esta página</p>
        </div>
        }
      </div>
    );
  }
}

export default HomePage;
