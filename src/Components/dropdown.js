import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Choose Date Range
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          {/* <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon> */}
          <ListItemText
            onClick={console.log("choose date please!!")}
            primary="Choose date"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          {/* <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon> */}
          <ListItemText primary="weekly" />
        </StyledMenuItem>
        <StyledMenuItem>
          {/* <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon> */}
          <ListItemText primary="monthly" />
        </StyledMenuItem>
        <StyledMenuItem>
          {/* <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon> */}
          <ListItemText primary="yearly" />
        </StyledMenuItem>
        <StyledMenuItem>
          {/* <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon> */}
          <ListItemText primary="Over All" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
