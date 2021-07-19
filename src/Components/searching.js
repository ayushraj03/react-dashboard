import "../App.css";
import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import salesOrder from "./salesOrder";

const data = [
  {
    sno: 1,
    date: 156151,
    name: "Gob",
    phone: "5165165152",
    salesorder_number: "testt",
  },
  {
    sno: 1,
    date: 156151,
    name: "Gob",
    phone: "5165165152",
    salesorder_number: "testt",
  },
  {},
];
const columns = [
  {
    dataField: "date",
    text: "Date",
    // style: { backgroundColor: "#fed9b7" },
  },
  {
    dataField: "salesorder_number",
    text: "ID",
    // style: { backgroundColor: "#add8e6" },
  },
  {
    dataField: "customer_name",
    text: "Customer Name",
    // style: { backgroundColor: "#fdfcdc" },
  },

  {
    dataField: "order_status",
    text: "Order Status",
    // style: { backgroundColor: "#add8e6" },
  },

  {
    dataField: "item_total_formatted",
    text: "Total",
    // style: { backgroundColor: "#fed9b7" },
  },
  {
    dataField: "shipped_status",
    text: "Shipment",
    // style: { backgroundColor: "#fdfcdc" },
  },
];
class Customer extends React.PureComponent {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!

    this.userList = {};
    this.state = { isLoading: false, usersList: [] };
    this.addData = this.addData.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }
  componentDidMount() {
    this.addData();
  }

  doSearch = () => {
    console.log("got here");
  };
  addData() {
    fetch(
      "http://localhost:8080/api/orders/sales-order?startDate=2020-03-17&endDate=2021-03-17"
    ).then((res) => {
      this.setState({
        isLoading: true,
      });
      res.json().then((result) => {
        console.log("this was the response", result);
        console.log("this is the users", result.salesOrder);
        console.log(
          "this is the users singular",
          result.salesOrder[0].salesOrder.order_status
        );
        // console.log(typeof result.salesOrder);

        //new obj... push vlues

        //{
        // name,
        // name,
        // name,
        // name,
        // name,
        // }

        var salesOrderlist = [];

        result.salesOrder.forEach((item) => {
          var newObj = {};
          newObj["item_total_formatted"] =
            item.salesOrder.line_items[0].item_total_formatted;
          newObj["salesorder_number"] = item.salesOrder.salesorder_number;
          newObj["order_status"] = item.salesOrder.order_status;

          newObj["customer_name"] = item.salesOrder.customer_name;

          newObj["date"] = item.salesOrder.date;
          newObj["shipped_status"] = item.salesOrder.shipped_status;

          salesOrderlist.push(newObj);
        });

        // var resultArray = [];
        // result.salesOrder.forEach((item) => {
        //   resultArray.push(item.salesOrder);
        // });

        this.setState({
          usersList: salesOrderlist,
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
    //   test = <button>{this.state.uthissersList[1].name.toString()}</button>;
    // }
    return [
      <div className="App">
        <h2
          style={{ backgroundColor: "black", color: "white", padding: "8px" }}
          className="Table-header"
        >
          Sales Order
        </h2>{" "}
        {/* {test} */}
        <div>
          <input type="text" placeholder="enter id" />
        </div>
        <span></span>
        <BootstrapTable
          keyField="id"
          //   data={this.state.usersList}
          data={data}
          columns={columns}
        />
      </div>,
    ];
  }
}
export default Customer;
