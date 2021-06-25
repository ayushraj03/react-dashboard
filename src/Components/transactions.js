import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

export default function Transaction() {
  const classes = useStyles();

  return (
    <div>
      <p
        style={{ justifyContent: "center", fontSize: "30px", padding: "10px" }}
      >
        TOTAL ORDERED
      </p>
      <div style={{ display: "flex" }}>
        <span style={{ display: "inline-block", padding: "10px" }}>
          <Card className={classes.root}>
            <CardHeader title="Team Buy Transactions" subheader="Yearly" />
            <CardContent>
              <p fontSize="250px">1234</p>
            </CardContent>
          </Card>
        </span>

        <span style={{ display: "inline-block", padding: "10px" }}>
          <Card className={classes.root}>
            <CardHeader title="Team Buy Transactions" subheader="Monthly" />
            <CardContent>
              <p fontSize="250px">123</p>
            </CardContent>
          </Card>
        </span>
        <br />

        <span style={{ display: "inline-block", padding: "10px" }}>
          <Card className={classes.root}>
            <CardHeader title="Team Buy Transactions" subheader="Daily" />
            <CardContent>
              <p fontSize="250px">50</p>
            </CardContent>
          </Card>
        </span>
      </div>
      <p
        style={{ justifyContent: "center", fontSize: "30px", padding: "10px" }}
      >
        TOTAL CANCELLED
      </p>
      <div style={{ display: "flex" }}>
        <span style={{ display: "inline-block", padding: "10px" }}>
          <Card className={classes.root}>
            <CardHeader title="Team Buy Transactions" subheader="Yearly" />
            <CardContent>
              <p fontSize="250px">1234</p>
            </CardContent>
          </Card>
        </span>

        <span style={{ display: "inline-block", padding: "10px" }}>
          <Card className={classes.root}>
            <CardHeader title="Team Buy Transactions" subheader="Monthly" />
            <CardContent>
              <p fontSize="250px">123</p>
            </CardContent>
          </Card>
        </span>
        <br />

        <span style={{ display: "inline-block", padding: "10px" }}>
          <Card className={classes.root}>
            <CardHeader title="Team Buy Transactions" subheader="Daily" />
            <CardContent>
              <p fontSize="250px">50</p>
            </CardContent>
          </Card>
        </span>
      </div>
    </div>
  );
}
