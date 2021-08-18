import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import "./style.css";

const textDialog = {
  title: "I agree terms and conditions",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem explicabo doloremque, possimus unde rem eveniet voluptate quos consectetur tempora eos quis delectus totam provident corporis! Recusandae consequuntur sint error",
};

export default function AlertDialog({ handleConfirm, handleAbort }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <Button
        className="mainButton"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Open
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Button onClick={handleClose} color="primary">
          <CloseRoundedIcon />
        </Button>
        <DialogTitle id="alert-dialog-title">{textDialog.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {textDialog.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAbort} color="primary">
            <HighlightOffRoundedIcon style={{ color: "red", fontSize: 30 }} />
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            <DoneRoundedIcon style={{ color: "green", fontSize: 30 }} />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
