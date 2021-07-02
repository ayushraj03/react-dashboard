import React, { Component } from "react";
import PropTypes from "prop-types";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  { sno: 1, email: "gob12@gmail.com", name: "Gob", phone: "5165165152" },
  { sno: 2, email: 2, name: "Buster", phone: "5" },
];

const columns = [
  {
    dataField: "date",
    text: "Date",
    style: { backgroundColor: "#fed9b7" },
  },
  {
    dataField: "Sales Order ID",
    text: "ID",
    style: { backgroundColor: "#add8e6" },
  },
  {
    dataField: "name",
    text: "Customer Name",
    style: { backgroundColor: "#fdfcdc" },
  },

  {
    dataField: "status",
    text: "Order Status",
    style: { backgroundColor: "#add8e6" },
  },

  {
    dataField: "Item Total",
    text: "Total",
    style: { backgroundColor: "#fed9b7" },
  },
];

class salesOrder extends Component {
  constructor(props) {
    this.sales = [];
    super(props);
  }
  componentDidMount() {
    this.addData();
  }
  addData() {
    fetch(
      "http://localhost:8080/api/orders/sales-order?startDate=2020-03-17&endDate=2021-03-17"
    ).then((res) => {
      this.setState({
        isLoading: true,
      });
      res.json().then((result) => {
        console.log("this was the response", result);
        for (var i = 0; i < result.salesOrder.length; i++) {
          console.log(
            "this is the sales info ",
            result.salesOrder[i].salesOrder.customer_name,

            result.salesOrder[i].salesOrder.line_items[0].bcy_rate,
            result.salesOrder[i].salesOrder.order_status,
            result.salesOrder[i].salesOrder.salesorder_number,
            result.salesOrder[i].salesOrder.date

            // result.salesOrder[0].salesOrder.contact_person_details[0].last_name
          );
          var test = {
            customer_name: result.salesOrder[i].salesOrder.customer_name,

            bcy_rate: result.salesOrder[i].salesOrder.line_items[0].bcy_rate,
            order_status: result.salesOrder[i].salesOrder.order_status,
            salesorder_number:
              result.salesOrder[i].salesOrder.salesorder_number,
            date: result.salesOrder[i].salesOrder.date,
          };
          sales.push(test);
        }

        console.log(test);

        this.setState({
          sales: test,
          isLoading: false,
        });
      });
    });
  }

  render() {
    return [
      <div className="App">
        <h2
          style={{ backgroundColor: "black", color: "white", padding: "8px" }}
          className="Table-header"
        >
          Sales Order
        </h2>{" "}
        {/* {test} */}
        <span></span>
        <BootstrapTable keyField="id" data={data} columns={columns} />
      </div>,
    ];
  }
}

export default salesOrder;
