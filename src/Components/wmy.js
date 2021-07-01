import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const FruitSelectDropdown = ({ fruitDetector }) => {
  const [currentFruit, setCurrentFruit] = useState(fruitDetector);

  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <form
          style={{ display: "flex", paddingLeft: "150px", paddingTop: "50px" }}
        >
          <select
            onChange={(event) => changeFruit(event.target.value)}
            value={currentFruit}
          >
            <option value="apples">This Week</option>
            <option value="oranges">This Month</option>
            <option value="tomatoes">This year</option>
            <option value="bananas">Over All</option>
          </select>
        </form>
        <span style={{ paddingTop: "50px", paddingLeft: "20px" }}>
          <button>Get Report</button>
        </span>
      </div>
      <div style={{ display: "flex", paddingLeft: "125px" }}>
        <span style={{ display: "inline-block", padding: "25px" }}>
          <Card>
            <CardHeader
              title="Successful orders"
              subheader="Total Transactions"
            />
            <CardContent>
              <p fontSize="250px">Value will come from api call</p>
            </CardContent>
          </Card>
        </span>

        <span style={{ display: "inline-block", padding: "25px" }}>
          <Card onClick={() => console.log("card click works")}>
            <CardHeader
              title="Cancelled orders"
              subheader="Total Transactions"
            />
            <CardContent>
              <p fontSize="250px">value will come from api call</p>
            </CardContent>
          </Card>
        </span>
        <span style={{ display: "inline-block", padding: "25px" }}>
          <Card>
            <CardHeader title="Pending orders" subheader="Total Transactions" />
            <CardContent>
              <p fontSize="250px">Value will come from api call</p>
            </CardContent>
          </Card>
        </span>
      </div>
    </div>
  );
};
export default FruitSelectDropdown;
