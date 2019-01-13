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
    users: []
  };

  componentDidMount() {
    this.setState({ users: sampleUserList });
  }

  render() {
    return (
      <UserContext.Provider value={{ users: this.state.users }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
