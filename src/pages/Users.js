import React from "react";
import { Link } from "@reach/router";
import { ReactComponent as EditSVG } from "../assets/edit.svg";
import { ReactComponent as TrashSVG } from "../assets/trash-2.svg";

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

class User extends React.Component {
  state = {
    users: null
  };

  componentDidMount() {
    this.setState({ users: sampleUserList });
  }

  removeUser = user => {
    const { users } = this.state;
    users.splice(users.indexOf(user), 1);
    this.setState({ users });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="o-container feed-container users-container">
        {users ? (
          <table className="users-table">
            <thead className="u-text-left">
              <tr>
                {users.length === 0 ? (
                  <th className="users-table-heading">No User</th>
                ) : (
                  <React.Fragment>
                    <th className="users-table-heading">Account ID</th>
                    <th className="users-table-heading">Name</th>
                    <th className="users-table-heading">Type</th>
                  </React.Fragment>
                )}

                <th className="u-text-right">
                  <Link to="/add-edit">
                    <button className="btn btn-primary">Add User</button>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.accountId}</td>
                  <td>{user.name}</td>
                  <td>{user.type}</td>
                  <td className="users-table--actions">
                    <Link
                      to={`/add-edit/${user.accountId}`}
                      className="users-table--actions-edit"
                    >
                      <EditSVG />
                    </Link>
                    <TrashSVG
                      onClick={() => this.removeUser(user)}
                      className="users-table--actions-remove"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default User;
