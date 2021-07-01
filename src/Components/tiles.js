import "date-fns";
import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

//button
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Drop from "./dropdown";
import Pie from "./pie";
// import Modal from "./dashModal";
import Modal from "react-modal";
import "./modal.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MaterialUIPickers() {
  const classes = useStyles();

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [showTModal, setShowTModal] = React.useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  const handleTcard = () => {
    console.log("working fine!!");
    setShowTModal(true);
  };
  if (showTModal) {
    // return <Modal />;
    return <Modalview />;
  }
  //date picker function
  const todayDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    console.log(today);
  };
  const onewprevDate = () => {
    var days = 7; // Days you want to subtract
    var date = new Date();

    var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
    var day = last.getDate();
    var day = String(last.getDate()).padStart(2, "0");

    var month = last.getMonth() + 1;
    var month = String(last.getMonth() + 1).padStart(2, "0");

    var year = last.getFullYear();
    const prevDate = year + "-" + month + "-" + day;
    console.log(prevDate);
  };

  const onemprevDate = () => {
    var days = 30; // Days you want to subtract
    var date = new Date();

    var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
    var day = last.getDate();
    var day = String(last.getDate()).padStart(2, "0");

    var month = last.getMonth() + 1;
    var month = String(last.getMonth() + 1).padStart(2, "0");

    var year = last.getFullYear();
    const prevDate = year + "-" + month + "-" + day;
    console.log(prevDate);
  };

  const oneyprevDate = () => {
    var days = 365; // Days you want to subtract
    var date = new Date();

    var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
    var day = last.getDate();
    var day = String(last.getDate()).padStart(2, "0");

    var month = last.getMonth() + 1;
    var month = String(last.getMonth() + 1).padStart(2, "0");

    var year = last.getFullYear();
    const prevDate = year + "-" + month + "-" + day;
    console.log(prevDate);
    //update of code
    var curr = new Date();
    var day = curr.getDay();
    var firstday = new Date(curr.getTime() - 60 * 60 * 24 * day * 1000); //will return firstday (ie sunday) of the week
    var lastday = new Date(curr.getTime() + 60 * 60 * 24 * 6 * 1000);
    console.log("___________________________________________");
    console.log(firstday);
    var day1 = firstday.getDate();
    var day1 = String(firstday.getDate()).padStart(2, "0");
    console.log(day1);
    var day2 = year + "-" + month + "-" + day1;
    console.log(day2);
  };

  // var firstday = new Date(date.setDate(date.getDate() - date.getDay()));
  // console.log(firstday);

  const whandleClick = () => {
    console.log("week date input");
    todayDate();
    onewprevDate();
  };

  const mhandleClick = () => {
    console.log("month date input");

    todayDate();
    onemprevDate();
  };

  const yhandleClick = () => {
    console.log("year date input");

    todayDate();
    oneyprevDate();
  };

  //this is the modal view => work inside this for wmy
  function Modalview() {
    const [state, setState] = useState(true);

    return (
      <div>
        {/* <button onClick={() => setState(true)}>open modal</button> */}
        <Modal
          dialogClassName="my-modal"
          isOpen={state}
          onRequestClose={() => setState(false)}
          style={{ overlay: { backgroundColor: "grey" } }}
        >
          <span style={{ display: "inline-block", padding: "25px" }}>
            <Card className={classes.root}>
              <CardHeader title="Team Buy" subheader="Total Transactions" />
              <CardContent>
                <p fontSize="250px">Click to view</p>
              </CardContent>
            </Card>
          </span>

          {/* (showTModal) ?{<Modal />} : <Span></Span> */}
          <span style={{ display: "inline-block", padding: "25px" }}>
            <Card className={classes.root}>
              <CardHeader
                title="Individual Buy"
                subheader="Total Transactions"
              />
              <CardContent>
                <p fontSize="250px">Click to view</p>
              </CardContent>
            </Card>
          </span>
          <span style={{ display: "inline-block", padding: "25px" }}>
            <Card className={classes.root}>
              <CardHeader title="Over All" subheader="Total Transactions" />
              <CardContent>
                <p fontSize="250px">Click to view</p>
              </CardContent>
            </Card>
          </span>
          {/* <h2>modal</h2>
          <p>modal body</p> */}
          <button onClick={() => setShowTModal(false)}>close</button>
        </Modal>
      </div>
    );
  }
  return (
    <div>
      <div style={{ padding: "25px", paddingLeft: "150px" }}>
        <h2>ANALYTICS REPORT</h2>
      </div>
      <div style={{ display: "flex", paddingLeft: "125px" }}>
        <span style={{ display: "inline-block", padding: "25px" }}>
          <Card className={classes.root} onClick={handleTcard}>
            <CardHeader title="Transactions" subheader="All Ananlytics" />
            <CardContent>
              <p fontSize="250px">Click to view</p>
            </CardContent>
          </Card>
        </span>
        {/* (showTModal) ?{<Modal />} : <Span></Span> */}
        <span style={{ display: "inline-block", padding: "25px" }}>
          <Card
            className={classes.root}
            onClick={() => console.log("card GMV click works")}
          >
            <CardHeader title="G.M.V" subheader="Total Transactions" />
            <CardContent>
              <p fontSize="250px">Click to view</p>
            </CardContent>
          </Card>
        </span>
        <div>
          <button onClick={whandleClick}>test Week</button>
          <button onClick={mhandleClick}>test month</button>
          <button onClick={yhandleClick}>test year</button>
        </div>
      </div>
      <div className={classes.root}></div>
    </div>
  );
}
