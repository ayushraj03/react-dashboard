import React, { Component } from "react";
import Sidebar from "./sidebar.js";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Route from "react-router-dom/Route";

import Transaction from "./Components/transactions";

import Login from "./Components/login";
import CustomersList from "./Components/customerList";
import Charts from "./Components/transChart";

export default class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Sidebar /> */}
          <Login />
          {/* <CustomersList /> */}
          {/* <Transaction /> */}
          {/* <Charts /> */}
        </div>
      </Router>
    );
  }
}
