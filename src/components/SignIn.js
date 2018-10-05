import React, { Component } from 'react';

import logo from "./global/img/logotipo-lux-login.png";

class SignInPage extends Component {
  render() {
    return (
      <main className="container">
      <img src={logo} alt="logo-lux" id="logo-index" />
      <h1>"No hay logro pequeño, ni paso que no cuente."</h1>
      <p>
        Encuentra en LUX un espacio seguro y la motivación para atravesar esos
        momentos difíciles, al leer y compartir las pequeñas metas que iluminan tu
        día a día.
      </p>
      <button type="button" onClick={() => this.props.onLogin()}>
        Entrar
      </button>
    </main>
     );
  }
}

export default SignInPage;
