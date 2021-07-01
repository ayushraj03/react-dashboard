import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerList from "./customerList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  toast.configure();

  const notify1 = () => {
    toast.success("Inventory sync is successsful", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2500,
    });
  };

  const notify2 = () => {
    toast.error("oops!! Inventory sync is unsuccesssful", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleCloseAgree = () => {
    setOpen(false);
    axios
      .post(
        "http://gobilliondev-env.eba-tekrrvmw.ap-south-1.elasticbeanstalk.com/zoho/product/sync"
      )
      .then((res) => {
        console.log("data loading success");
        console.log(res);
        console.log(res.data);
        notify1();
      })
      .catch((error) => {
        console.log("error");
        notify2();
      });
  };

  const handleCloseDisagree = () => {
    console.log("disagree");
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sync Inventory
      </Button> */}
      <List>
        {["Inventory Sync"].map((text, index) => {
          if (text == "Inventory Sync") {
            return (
              <ListItem onClick={handleClickOpen} button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          }
        })}
      </List>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDisagree}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Sync Inventory?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Click on agree and it will sync your Inventory.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDisagree} color="primary">
            Disagree
          </Button>
          <Button onClick={handleCloseAgree} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
