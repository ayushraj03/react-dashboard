import React, { Component } from "react";
import Sidebar from "./sidebar.js";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Route from "react-router-dom/Route";

export default class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar />
        </div>
      </Router>
    );
  }
}
