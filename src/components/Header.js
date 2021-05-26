import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import HideOnScroll from "./HideOnScroll";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    height: "100vh",
    color: "#ccc",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    margin: "20px auto",
    display: "inline-block",
    fontFamily: "Alegreya Sans SC",
    letterSpacing: "4px",
    fontWeight: "500",
    marginTop: "2.5rem",
    textShadow: "4px 2px 10px darkblue",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "Alegreya Sans SC",
    letterSpacing: "2px",
    fontWeight: "200",
    marginTop: "0.4rem",
    textShadow: "4px 2px 10px darkblue",
  },
  welcome: {
    fontFamily: "Alegreya Sans SC",
    fontSize: "2.6rem",
    justifyContent: "center",
    margin: "1rem auto",
    color: "#e76f51",
    letterSpacing: "4px",
    fontWeight: "500",
    textShadow: "2px 2px 12px #ccc",
    flex: "1 0 auto",
    animation: `$myEffect 5000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-400%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          Portfolio
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          of a junior webdeveloper
        </Typography>
      <HideOnScroll>
        <Typography variant="h5" className={classes.welcome}>
          <Box borderColor="primary.main">Viktor Helfrih</Box>
        </Typography>
      </HideOnScroll>
    </Container>
  );
}
