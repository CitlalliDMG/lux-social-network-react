import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// import * as routes from "../constants/routes";
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <div >
      <header>
        <div className="wrapper">
          <h1>LUX</h1>
          {this.props.user ? <button onClick={() => this.props.onLogout()}>Cerrar sesión</button> : <button onClick={() => this.props.onLogin()}>Entrar</button>}
          {/* <ul>
            <li>
              <Link to={routes.HOME}>Home</Link>
            </li>
            <li>
              <Link to={routes.ACCOUNT}>Account</Link>
            </li>
          </ul> */}
        </div>
      </header>
    </div>
     );
  }
}

export default Navigation;


