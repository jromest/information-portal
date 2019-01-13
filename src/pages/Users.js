import React from "react";
import { Link } from "@reach/router";
import { ReactComponent as EditSVG } from "../assets/edit.svg";
import { ReactComponent as TrashSVG } from "../assets/trash-2.svg";

import { UserContextConsumer } from "../context/UserContext";

const User = () => (
  <div className="o-container feed-container users-container">
    <UserContextConsumer>
      {({ users, onRemove }) =>
        users ? (
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
                  <Link to="/manage">
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
                      to={`/manage/${user.accountId}`}
                      className="users-table--actions-edit"
                    >
                      <EditSVG />
                    </Link>
                    <TrashSVG
                      onClick={() => onRemove(user)}
                      className="users-table--actions-remove"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "Loading..."
        )
      }
    </UserContextConsumer>
  </div>
);

export default User;
