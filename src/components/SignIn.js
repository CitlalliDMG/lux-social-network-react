import React, { Component } from "react";

import logo from "./global/img/logotipo-lux-login.png";
import iconGoogle from "./global/img/google-logo-icon-PNG-Transparent-Background.png";
import './SignIn.css'

class SignInPage extends Component {
  render() {
    return (
      <main className="container col-8">
        <img src={logo} alt="logo-lux" id="logo-index" />
        <h1>"No hay logro pequeño, ni paso que no cuente."</h1>
        <p>
          Encuentra en LUX un espacio seguro y la motivación para atravesar esos
          momentos difíciles, al leer y compartir las pequeñas metas que
          iluminan tu día a día.
        </p>
        <button type="button" id="btn-google" onClick={() => this.props.onLogin()}>
          <img src={iconGoogle} alt="icon-google" />
          Google
        </button>
      </main>
    );
  }
}

export default SignInPage;
