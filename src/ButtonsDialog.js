import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    margin: "20px auto",
    animation: `$rollIn 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes rollIn": {
    "0%": {
      opacity: 0,
      transform: "translate3d(-600%, 0, 0) rotate3d(0, 0, 1, -120deg)",
    },
    "100%": {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
    },
  },
}));

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.buttonContainer}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        className={classes.button}
      >
        Contact Me
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Github
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        LinkedIn
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Like what you see? You can reach me at:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            vhelfrih@gmail.com
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
