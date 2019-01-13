import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import Feed from "./components/Feed";
import PostPage from "./pages/PostPage";
import Users from "./pages/Users";
import ManageUser from "./pages/ManageUser";
import RequestDocument from "./pages/RequestDocument";

import { UserContextProvider } from "./context/UserContext";

import "./styles/main.scss";

import { siteMetadata } from "./app-config";

class App extends Component {
  render() {
    return (
      <div>
        <Header title={siteMetadata.title} />
        <UserContextProvider>
          <Router>
            <Home path="/">
              <Feed path="/" />
              <PostPage path="post/:postId" />
              <Users path="users" />
              <ManageUser path="manage" />
              <ManageUser path="manage/:userId" />
              <RequestDocument path="request" />
              <RequestDocument path="request/:requestId" />
            </Home>
            <Login path="login" />
            <NotFound default />
          </Router>
        </UserContextProvider>
      </div>
    );
  }
}

export default App;
