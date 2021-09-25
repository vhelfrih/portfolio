import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import AlertDialogSlide from "./ButtonsDialog";

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

export default function Buttons() {
  const classes = useStyles();

  return (
    <Container className={classes.buttonContainer}>
      <AlertDialogSlide />
      <Button variant="contained" color="primary" className={classes.button}>
        Github
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        LinkedIn
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        CodeWars
      </Button>
    </Container>
  );
}
