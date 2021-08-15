import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import "./login.css";
import Sidebar from "../sidebar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Linkk,
} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Gobillion
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
// var dataobj = Sequelize()
// dataobj.firstname = "rahul"
// dataobj.save()

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();

  //this.handleEmailChange = this.handleEmailChange.bind(this);
  const [isAuth, setAuth] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [hasError, sethasError] = useState(false);

  function handlePass(e) {
    let val = e.target.value;
    setPass(val);
    console.log(val);
  }

  function handleEmail(e) {
    let val = e.target.value;
    setEmail(val);
    console.log(val);
  }
  // chnges start here
  async function validate(e) {
    e.preventDefault();

    var valid = false;

    // if (passwords match) and if (fields are not -> "") => valid = true

    if (pass === "" || email === "") {
    } else {
      valid = true;
    }

    if (valid) {
      var mg_body = JSON.stringify({
        email: email,
        pass: pass,
      });
      console.log("entering fetch");
      await fetch("http://localhost:8080/adminuser/sign-in", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        ContentLength: 69,
        body: mg_body,
      })
        .then((res) => {
          // res.json().then((data) => console.log(data));

          res.json().then((res) => {
            console.log(res["responseMessage"]);
            if (res["responseMessage"] === "Success") {
              console.log("redirecting user to dashboard");
              setAuth(true);
              //saving token value in local storage
              window.localStorage.setItem("token", res["data"]["token"]);
              const tokenval = window.localStorage.getItem("token");
              // console.log(tokenval);
            } else {
              setAuth(false);
              console.log("no permission to redirect user to  dashboard page");
              sethasError(true);
            }
          });

          // console.log("This is the resss body", res.json());
        })
        .catch((err) => {
          console.log("This was the error", err);
        });
    }
  }

  if (isAuth) {
    return <Sidebar />;
  }

  // .then((res) => {
  //   // console.log("____________________________", res.json);
  //   res.json().then((x) => {
  //     console.log(x["message"]);

  //           if (x["message"] === "success") {
  //             console.log("redirect to login home");

  //             setAuth(true);
  //           } else {
  //             setAuth(false);
  //             console.log("setting hasError");
  //             sethasError(true);
  //           }
  //         });
  //       })
  //       .then((data) => console.log("================", data))
  //       .catch((e) => {
  //         //show alert ERROR
  //       });
  //   } else {
  //     console.log("not allowed");
  //     alert("Form has errors.");
  //   }

  // let errMsg = "";

  // if (hasError) {
  //   console.log("setting err msg");
  //   errMsg = "Check your password and try again";
  // } else {
  //   errMsg = "";
  // }
  // if (isAuth) {
  //   return <Home />;
  // }

  return (
    <Router>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <span>
            <p className="pstyle">Welcome to Gobillion</p>
          </span>

          <img className="logo-nav" src="images/goB.svg"></img>
          <br />
          <Typography component="h1" variant="h5">
            <span>
              Log In{" "}
              <span>
                <LockOutlinedIcon />
              </span>
            </span>
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePass}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            {/* <p style={{ color: "red" }}>{errMsg}</p> */}

            <Button
              onClick={validate}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Router>
  );
}
