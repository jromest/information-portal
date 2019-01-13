import React from "react";
import { Link } from "@reach/router";

import { UserContextConsumer } from "../context/UserContext";

const Header = props => (
  <header className="header">
    <div className="o-container o-flex o-flex--space-between header-wrapper">
      <div className="header-title">
        <Link to="/" className="header-title-link">
          {props.title}
        </Link>
      </div>
      <nav className="o-list-bare">
        <li className="header-nav-item">
          <UserContextConsumer>
            {({ isLogin, loggedUser }) =>
              isLogin ? (
                <div className="greetings">Hello, {loggedUser.name}</div>
              ) : (
                <Link to="login" className="btn btn-secondary">
                  Login
                </Link>
              )
            }
          </UserContextConsumer>
        </li>
      </nav>
    </div>
  </header>
);

export default Header;
