import React from "react";
import { ReactComponent as UserSVG } from "../assets/user.svg";
import { ReactComponent as LockSVG } from "../assets/lock.svg";
import { ReactComponent as HashSVG } from "../assets/hash.svg";

const AddUser = () => (
  <div className="o-container feed-container add-user-container">
    <div className="add-user-form">
      <label className="text-label">Account Type</label>
      <div className="text-field  text-field-radio">
        <input
          type="radio"
          className="input-radio"
          id="account-type-admin"
          name="account-type"
          value="admin"
        />
        <label
          htmlFor="account-type-admin"
          className="text-label input-radio-label"
        >
          Admin
        </label>
        <input
          type="radio"
          className="input-radio"
          id="account-type-user"
          name="account-type"
          value="user"
          checked
        />
        <label
          htmlFor="account-type-user"
          className="text-label input-radio-label"
        >
          User
        </label>
      </div>

      <label htmlFor="accound-id" className="text-label">
        Account ID
      </label>
      <div className="text-field">
        <HashSVG className="text-field-icon" />
        <input
          type="text"
          className="text-input text-field-input"
          id="account-id"
        />
      </div>

      <label htmlFor="name" className="text-label">
        Name
      </label>
      <div className="text-field">
        <UserSVG className="text-field-icon" />
        <input type="text" className="text-input text-field-input" id="name" />
      </div>

      <label htmlFor="password" className="text-label">
        Password
      </label>
      <div className="text-field">
        <LockSVG className="text-field-icon" />
        <input
          type="password"
          className="text-input text-field-input"
          id="password"
        />
      </div>

      <label htmlFor="confirm-password" className="text-label">
        Confirm Password
      </label>
      <div className="text-field">
        <LockSVG className="text-field-icon" />
        <input
          type="password"
          className="text-input text-field-input"
          id="confirm-password"
        />
      </div>

      <button className="btn btn-primary">Save</button>
    </div>
  </div>
);

export default AddUser;
