import React from "react";
import { Link } from "@reach/router";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import { ReactComponent as FileTextSVG } from "../assets/file-text.svg";
import { ReactComponent as UsersSVG } from "../assets/users.svg";
import { ReactComponent as FileSVG } from "../assets/file.svg";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return isCurrent
        ? {
            className: "sidebar-item sidebar-item-active"
          }
        : {
            className: "sidebar-item"
          };
    }}
  />
);

class MainSidebar extends React.Component {
  render() {
    return (
      <section className="sidebar">
        <ul className="o-list-bare">
          <li>
            <NavLink
              to="/"
              className="sidebar-item sidebar-item-active"
              getProps={isCurrent => ({ className: "sidebar-item-active" })}
            >
              <HomeSVG />
              <span className="sidebar-item-title">Home</span>
            </NavLink>
          </li>
        </ul>

        <ul className="o-list-bare">
          <div className="sidebar-title">Forms</div>
          <li className="sidebar-item">
            <FileTextSVG />
            <span className="sidebar-item-title">Request Grades</span>
          </li>
          <li>
            <NavLink to="request">
              <FileSVG />
              <span className="sidebar-item-title">Request Document</span>
            </NavLink>
          </li>
        </ul>

        <ul className="o-list-bare">
          <div className="sidebar-title">Manage</div>
          <li>
            <NavLink to="users" className="sidebar-item">
              <UsersSVG />
              <span className="sidebar-item-title">Users</span>
            </NavLink>
          </li>
        </ul>
      </section>
    );
  }
}
export default MainSidebar;
