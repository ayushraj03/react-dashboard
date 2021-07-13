import "../App.css";
import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

const fakeTestData = [
  { sno: 1, email: "gob12@gmail.com", name: "Gob", phone: "5165165152" },
  { sno: 2, email: 2, name: "Buster", phone: "5" },
  { sno: 3, email: "'fakefjhjhbvds'", name: "ajax", phone: "895632555" },
];
const columns = [
  // {
  //   dataField: "sno",
  //   text: "S.no",
  //   style: { backgroundColor: "#add8e6" },
  // },
  {
    dataField: "name",
    text: "Customer Name",
    style: { backgroundColor: "#fdfcdc" },
  },
  {
    dataField: "email",
    text: "Email",
    style: { backgroundColor: "#fed9b7" },
  },
  {
    dataField: "phone",
    text: "Contact",
    style: { backgroundColor: "#add8e6" },
  },
];
class Customer extends React.PureComponent {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!

    this.userList = {};
    this.state = { isLoading: false, usersList: [] };
    this.addData = this.addData.bind(this);
  }
  componentDidMount() {
    this.addData();
  }

  addData() {
    fetch("http://localhost:8080/user/list-users").then((res) => {
      this.setState({
        isLoading: true,
      });
      res.json().then((result) => {
        console.log("this was the response", result);
        console.log("this is the users", result.users);

        this.setState({
          usersList: result.users,
          isLoading: false,
        });
      });
    });
  }

  render() {
    // let test;
    // if (this.state.usersList.length == 0) {
    //   test = <button>test</button>;
    // } else {
    //   test = <button>{this.state.usersList[1].name.toString()}</button>;
    // }
    return [
      <div className="App">
        <h2
          style={{ backgroundColor: "black", color: "white", padding: "8px" }}
          className="Table-header"
        >
          Customer List
        </h2>{" "}
        {/* {test} */}
        <span></span>
        <BootstrapTable
          keyField="id"
          data={this.state.usersList}
          columns={columns}
        />
      </div>,
    ];
  }
}
export default Customer;
