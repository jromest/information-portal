import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";

const data = {
  title: "InfoPortal"
};

class App extends Component {
  render() {
    return (
      <div>
        <Header title={data.title} />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
