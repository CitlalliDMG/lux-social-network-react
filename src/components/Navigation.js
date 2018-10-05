import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import * as routes from "../constants/routes";
import "./Navigation.css";
import logo from "./global/img/logotipo-lux-login.png";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        {/* eslint-disable-next-line */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="lux-icon"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item dropdown">
              {/* eslint-disable-next-line */}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Bienvenid@{" "}
                {this.props.user.displayName || this.props.user.email}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/* eslint-disable-next-line */}
                <a className="avatar-container" href="#">
                  <img
                    src={this.props.user.photoURL}
                    id="avatar"
                    alt="profile-avatar"
                  />
                </a>
                <p className="dropdown-item bold">Correo:</p>
                <p className="dropdown-item">{this.props.user.displayName}</p>
                <button
                  id="logout"
                  className="dropdown-item btn btn-primary"
                  onClick={() => this.props.onLogout()}
                >
                  Cerrar sesión
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
