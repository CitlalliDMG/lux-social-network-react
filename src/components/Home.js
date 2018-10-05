import React, { Component } from "react";
import { firebase, auth } from '../firebase';

import Navigation from "./Navigation";
import PostInput from "./PostInput";
import DisplayPost from "./DisplayPost";
import SignInPage from "./SignIn";


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
      <React.Fragment>
        {this.state.user ?
        (<React.Fragment>
        <Navigation onLogin={this.login} onLogout={this.logout} user={this.state.user} />
        <div className="row mt-5">
          <PostInput user={this.state.user} />
          <DisplayPost user={this.state.user} />
        </div>
        </React.Fragment>)
        :
        (<SignInPage onLogin={this.login} onLogout={this.logout} user={this.state.user}/>)
        }
      </React.Fragment>
    );
  }
}

export default HomePage;
