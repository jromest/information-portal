import React from "react";

const Header = props => (
  <header style={tempStyle.header}>
    <div style={tempStyle.container}>
      <div style={tempStyle.title}>{props.title}</div>
      <nav style={tempStyle.nav}>
        <li style={tempStyle.navItem}>Home</li>
        <li style={tempStyle.navItem}>About</li>
        <li style={tempStyle.navItem}>Contact</li>
      </nav>
    </div>
  </header>
);

const tempStyle = {
  header: {
    backgroundColor: "#c5c5c5"
  },
  container: {
    margin: "0 auto",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold"
  },
  nav: {
    listStyle: "none"
  },
  navItem: {
    display: "inline-block",
    marginLeft: "20px"
  }
};

export default Header;
