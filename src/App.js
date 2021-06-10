import React, { Component } from "react";
import Sidebar from "./sidebar.js";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Route from "react-router-dom/Route";

export default class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            path="/sync"
            exact
            render={() => {
              <h2>sync successful</h2>;
            }}
          />
          <Sidebar />
        </div>
      </Router>
    );
  }
}
