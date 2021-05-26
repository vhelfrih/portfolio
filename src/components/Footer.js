import { Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';

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
      <Typography variant="h7">Copyright <CopyrightIcon fontSize="small" /> 2021 vhhun</Typography>
    </Container>
  );
}
