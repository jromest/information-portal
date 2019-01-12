import React from "react";
import { ReactComponent as UserSVG } from "../assets/user.svg";
import { ReactComponent as LockSVG } from "../assets/lock.svg";

const Login = () => (
  <section className="o-container">
    <div className="login-container">
      <h1 className="u-text-center login-container-title">Welcome back!</h1>
      <label htmlFor="accound-id" className="text-label">
        Account ID
      </label>
      <div className="text-field">
        <UserSVG className="text-field-icon" />
        <input
          type="text"
          className="text-input text-field-input"
          name="account-id"
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
        />
      </div>
      <div className="login-container-actions">
        <span className="login-container-actions--forgot">
          Forgot password?
        </span>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  </section>
);

export default Login;
