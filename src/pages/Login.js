import React from "react";
import { navigate } from "@reach/router";
import { ReactComponent as UserSVG } from "../assets/user.svg";
import { ReactComponent as LockSVG } from "../assets/lock.svg";

import { UserContextConsumer } from "../context/UserContext";

class Login extends React.Component {
  state = {
    accountId: "",
    password: ""
  };

  handleChange = name => event => this.setState({ [name]: event.target.value });

  handleLogin = (users, callback) => {
    const { accountId, password } = this.state;
    const loggedUSer = users.filter(
      user => user.accountId === accountId && user.password === password
    );

    if (loggedUSer.length !== 0) {
      callback(loggedUSer[0]);
      navigate("/");
      this.setState({
        accountId: "",
        password: ""
      });
    } else {
      alert("Account ID and password doesn't match");
    }
  };

  render() {
    const { accountId, password } = this.state;
    return (
      <section className="o-container">
        <UserContextConsumer>
          {({ users, onLogin }) => (
            <div className="login-container">
              <h1 className="u-text-center login-container-title">
                Welcome back!
              </h1>
              <label htmlFor="accound-id" className="text-label">
                Account ID
              </label>
              <div className="text-field">
                <UserSVG className="text-field-icon" />
                <input
                  type="text"
                  className="text-input text-field-input"
                  name="account-id"
                  onChange={this.handleChange("accountId")}
                  value={accountId}
                />
              </div>
              <label htmlFor="password" className="text-label">
                Password
              </label>
              <div className="text-field">
                <LockSVG className="text-field-icon" />
                <input
                  type="password"
                  className="text-input text-field-input"
                  name="password"
                  onChange={this.handleChange("password")}
                  value={password}
                />
              </div>
              <div className="login-container-actions">
                <span className="login-container-actions--forgot">
                  Forgot password?
                </span>
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleLogin(users, onLogin)}
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </UserContextConsumer>
      </section>
    );
  }
}

export default Login;
