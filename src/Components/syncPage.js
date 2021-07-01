// import React, { Component } from "react";

// export default class Sync extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Home Page</h3>
//       </div>
//     );
//   }
// }

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
//fliping start

import React, { Component, useState } from "react";
import Flippy, { FrontSide, BackSide } from "./../lib";
// import Rick from "./rick.png";
// import "./App.css";

const FlippyStyle = {
  width: "200px",
  height: "200px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "25px",
  justifyContent: "center",
};

const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: "#41669d",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <img style={{ maxWidth: "100%", maxHeight: "100%" }} /> */}
      View
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {children}
        <br />
        {/* (FRONT SIDE) */}
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: "#175852",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      100
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {children}
        <br />
        (BACK SIDE)
      </span>
    </BackSide>
  </React.Fragment>
);

const DefaultCardContents2 = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: "#41669d",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <img style={{ maxWidth: "100%", maxHeight: "100%" }} /> */}
      View
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {children}
        <br />
        {/* (FRONT SIDE) */}
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: "#175852",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      1000
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {children}
        <br />
        (BACK SIDE)
      </span>
    </BackSide>
  </React.Fragment>
);

const DefaultCardContents3 = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: "#41669d",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <img style={{ maxWidth: "100%", maxHeight: "100%" }} /> */}
      View
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {children}
        <br />
        {/* (FRONT SIDE) */}
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: "#175852",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      10000
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {children}
        <br />
        (BACK SIDE)
      </span>
    </BackSide>
  </React.Fragment>
);

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
};

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
// const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
//   <Flippy
//     flipOnHover={true}
//     flipDirection={flipDirection}
//     style={FlippyStyle}
//   >
//     <DefaultCardContents>
//     I flip {flipDirection}ly on hover
//     </DefaultCardContents>
//   </Flippy>
// );

const FlippyOnClick = ({ flipDirection = "vertical" }) => {
  // const [startDate, setStartdate] = useState(Date.now());
  // const [endDate, setEnddate] = useState(Date.now());
  return (
    <Flippy
      onClick={whandleClick}
      flipOnClick={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <DefaultCardContents>
        {" "}
        <h2>Weekly Transactions</h2>
      </DefaultCardContents>
    </Flippy>
  );
};
const FlippyOnClick2 = ({ flipDirection = "vertical" }) => {
  // const [startDate, setStartdate] = useState(Date.now());
  // const [endDate, setEnddate] = useState(Date.now());
  return (
    <Flippy
      onClick={mhandleClick}
      flipOnClick={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <DefaultCardContents2>
        {" "}
        <h2>Monthly Transaction</h2>
      </DefaultCardContents2>
    </Flippy>
  );
};

const FlippyOnClick3 = ({ flipDirection = "vertical" }) => {
  // const [startDate, setStartdate] = useState(Date.now());
  // const [endDate, setEnddate] = useState(Date.now());
  return (
    <Flippy
      onClick={yhandleClick}
      flipOnClick={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <DefaultCardContents3>
        {" "}
        <h2>Yearly Transaction</h2>
      </DefaultCardContents3>
    </Flippy>
  );
};

// const ControlledFlippy = ({ isFlipped })  => (
//   <Flippy
//     flipDirection="vertical"
//     isFlipped={isFlipped}
//     style={FlippyStyle}
//   >
//     <DefaultCardContents>
//       I flip vertically for every 3sec. I am controlling by a upper scope.
//     </DefaultCardContents>
//   </Flippy>
// );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped,
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div
          style={{
            padding: "10px",
            display: "flex",
            flex: "1 0 200px",

            "flex-wrap": "wrap",
          }}
        >
          {/* <Flippy
              ref={(r) => this.flippyHorizontal = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <DefaultCardContents>
              I flip horizontally with an event<br />
              <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Toggle Me!</button>
            </DefaultCardContents>
          </Flippy>
          <FlippyOnHover flipDirection="horizontal"/>
          <FlippyOnClick flipDirection="horizontal"/>
          <Flippy
            ref={(r) => this.flippyVertical = r}
            flipOnClick={false}
            flipDirection="vertical"
            style={FlippyStyle}
          >
            <DefaultCardContents>
              I flip vertically with an event<br />
              <button type="button" onClick={() => this.flippyVertical.toggle()}>Toggle Me!</button>
            </DefaultCardContents>
          </Flippy>
          <FlippyOnHover /> */}
          <span style={{ display: "inline-block", padding: "15px" }}>
            <FlippyOnClick />
          </span>

          <span style={{ display: "inline-block", padding: "15px" }}>
            <FlippyOnClick2 />
          </span>

          <span style={{ display: "inline-block", padding: "15px" }}>
            <FlippyOnClick3 />
          </span>
          {/* <ControlledFlippy
            isFlipped={this.state.isFlipped}
          />  */}
        </div>
      </div>
    );
  }
}

export default App;
