import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AlertDialogSlide from "./ButtonsDialog";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/001.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Content />
      <AlertDialogSlide />
      <Footer />
    </div>
  );
}
