import React, { Component } from "react";
import Sidebar from "./sidebar.js";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Route from "react-router-dom/Route";

import Transaction from "./Components/transactions";

import Login from "./Components/login";
import CustomersList from "./Components/customerList";
import Charts from "./Components/transChart";
import Reports from "./Components/reports";
import Wmy from "./Components/wmy";
import Modal from "./Components/dashModal";
import Tile from "./Components/tiles";
import Sales from "./Components/salesOrder";
import SalesCopy from "./Components/salesCopy";
export default class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Sidebar /> */}
          {/* <Sales /> */}
          <SalesCopy />
          {/* <Login /> */}
          {/* <Reports /> */}
          {/* <CustomersList /> */}
          {/* <Transaction /> */}
          {/* <Charts /> */}
          {/* <Wmy /> */}
          {/* <Tile /> */}
          {/* <Modal /> */}
        </div>
      </Router>
    );
  }
}
