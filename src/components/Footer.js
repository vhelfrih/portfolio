import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#ccc",
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container className={classes.footer}>
      <Typography variant="h7">Copyright &copy; 2021 vhhun</Typography>
    </Container>
  );
}
