import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

//button
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <div style={{ padding: "25px" }}>
        <h2>ANALYTICS REPORT</h2>
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/dd"
            // margin="normal"
            id="start-date"
            label="Choose start date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            // margin="normal"
            id="end-date"
            label="Choose end date"
            format="yyyy/MM/dd"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />

          <button variant="contained" color="secondary">
            GET REPORT
          </button>
        </Grid>
      </MuiPickersUtilsProvider>
      {/* <div
        style={{
          display: "flex",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "25px",
            justifyContent: "center",
          }}
        >
          <Card className={classes.root}>
            <CardHeader
              title="Successful orders"
              subheader="Total Transactions"
            />
            <CardContent>
              <p fontSize="250px">value will come from api call</p>
            </CardContent>
          </Card>
          <Card className={classes.root}>
            <CardHeader
              title="Cancelled orders"
              subheader="Total Transactions"
            />
            <CardContent>
              <p fontSize="250px">value will come from api call</p>
            </CardContent>
          </Card>
        </span>
      </div> */}
      <div style={{ display: "flex" }}>
        <span style={{ display: "inline-block", padding: "25px" }}>
          <Card className={classes.root}>
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
          <Card className={classes.root}>
            <CardHeader
              title="Cancelled orders"
              subheader="Total Transactions"
            />
            <CardContent>
              <p fontSize="250px">value will come from api call</p>
            </CardContent>
          </Card>
        </span>
      </div>
      <div className={classes.root}>
        <span style={{ padding: "25px" }}>
          <ButtonGroup
            color="secondary"
            aria-label="outlined secondary button group"
          >
            <Button>Weekly</Button>
            <Button>Monthly</Button>
            <Button>Yearly</Button>
          </ButtonGroup>
        </span>
      </div>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "25px",
            justifyContent: "center",
          }}
        >
          <Card className={classes.root}>
            <CardHeader
              title="Cancelled orders"
              subheader="Total Transactions"
            />
            <CardContent>
              <p fontSize="250px">value will come from api call</p>
            </CardContent>
          </Card>
        </span>
      </div> */}
    </div>
  );
}
