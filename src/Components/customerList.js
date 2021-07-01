import "../App.css";
import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  { sno: 1, email: "gob12@gmail.com", name: "Gob", phone: "5165165152" },
  { sno: 2, email: 2, name: "Buster", phone: "5" },
  { sno: 3, email: 3, name: "George Michael", phone: "4" },
  { sno: 4, email: 3, name: "john paul", phone: "4" },
  { sno: 5, email: 3, name: "simmonl", phone: "4" },
  { sno: 6, email: 3, name: "bob", phone: "4" },
  { sno: 7, email: 3, name: "George Michael", phone: "4" },
  { sno: 1, email: "gob12@gmail.com", name: "Gob", phone: "5165165152" },
  { sno: 2, email: 2, name: "Buster", phone: "5" },
  { sno: 3, email: 3, name: "George Michael", phone: "4" },
  { sno: 4, email: 3, name: "john paul", phone: "4" },
  { sno: 5, email: 3, name: "simmonl", phone: "4" },
  { sno: 6, email: 3, name: "bob", phone: "4" },
  { sno: 7, email: 3, name: "George Michael", phone: "4" },
  { sno: 1, email: "gob12@gmail.com", name: "Gob", phone: "5165165152" },
  { sno: 2, email: 2, name: "Buster", phone: "5" },
  { sno: 3, email: 3, name: "George Michael", phone: "4" },
  { sno: 4, email: 3, name: "john paul", phone: "4" },
  { sno: 5, email: 3, name: "simmonl", phone: "4" },
  { sno: 6, email: 3, name: "bob", phone: "4" },
  { sno: 7, email: 3, name: "George Michael", phone: "4" },
];
const columns = [
  {
    dataField: "sno",
    text: "S.no",
    style: { backgroundColor: "#add8e6" },
  },
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

// async function apicall() {
//   await fetch("").then((res) => {
//     console.log(res["users"]["name"]);
//   });
// }
const getlist = () => {
  console.log("fetching");
  // apicall();
};
class Cus extends Component {
  render() {
    return (
      <div className="App">
        <h2
          style={{ backgroundColor: "black", color: "white", padding: "10px" }}
          className="Table-header"
        >
          Customer List
        </h2>{" "}
        <span>
          <button onClick={getlist}>get list</button>
        </span>
        <BootstrapTable keyField="id" data={data} columns={columns} />
      </div>
    );
  }
}
export default Cus;
