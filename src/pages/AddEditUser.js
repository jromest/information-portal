import React from "react";
import { ReactComponent as UserSVG } from "../assets/user.svg";
import { ReactComponent as LockSVG } from "../assets/lock.svg";
import { ReactComponent as HashSVG } from "../assets/hash.svg";

const sampleUserList = [
  {
    accountId: "000",
    password: "12345",
    name: "Admin",
    type: "admin"
  },
  {
    accountId: "001",
    password: "12345",
    name: "Juan dela Cruz",
    type: "user"
  }
];

class AddUser extends React.Component {
  state = {
    user: {
      type: "user",
      accountId: "",
      name: "",
      password: ""
    },
    confirmPassword: ""
  };

  componentDidMount() {
    if (this.props.userId) {
      this.setState({
        user: sampleUserList.find(
          id => id.accountId.toString() === this.props.userId
        )
      });
    }
  }

  handleChange = name => event => {
    const { user } = this.state;
    if (name !== "confirmPassword") {
      user[name] = event.target.value;
      this.setState({ user });
    } else {
      this.setState({ confirmPassword: ([name] = event.target.value) });
    }
  };

  handleSave = () => {
    const { user, confirmPassword } = this.state;
    if (confirmPassword !== user.password) {
      alert("Password doesn't match.");
    } else {
      sampleUserList.unshift(user);
      this.setState({
        user: {
          type: "user",
          accountId: "",
          name: "",
          password: ""
        },
        confirmPassword: ""
      });
    }
  };

  render() {
    const { user, confirmPassword } = this.state;
    return (
      <div className="o-container feed-container add-user-container">
        <div className="add-user-form">
          <label className="text-label">Account Type</label>
          <div className="text-field  text-field-radio">
            <input
              type="radio"
              className="input-radio"
              id="account-type-admin"
              name="account-type"
              onChange={this.handleChange("type")}
              value="admin"
              checked={user.type === "admin"}
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
              onChange={this.handleChange("type")}
              value="user"
              checked={user.type === "user"}
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
              onChange={this.handleChange("accountId")}
              value={user.accountId}
            />
          </div>

          <label htmlFor="name" className="text-label">
            Name
          </label>
          <div className="text-field">
            <UserSVG className="text-field-icon" />
            <input
              type="text"
              className="text-input text-field-input"
              id="name"
              onChange={this.handleChange("name")}
              value={user.name}
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
              id="password"
              onChange={this.handleChange("password")}
              value={user.password}
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
              onChange={this.handleChange("confirmPassword")}
              value={confirmPassword}
            />
          </div>

          <button className="btn btn-primary" onClick={this.handleSave}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default AddUser;
