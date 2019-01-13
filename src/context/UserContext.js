import React from "react";

const UserContext = React.createContext();

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

export const UserContextConsumer = UserContext.Consumer;

export class UserContextProvider extends React.Component {
  state = {
    users: [],
    isLogin: false,
    loggedUser: null
  };

  componentDidMount() {
    this.setState({ users: sampleUserList });
  }

  handleLogin = user => {
    this.setState(prevState => ({
      ...prevState,
      isLogin: true,
      loggedUser: user
    }));
  };

  render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, onLogin: this.handleLogin }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
