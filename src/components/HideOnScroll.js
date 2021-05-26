import { Slide, useScrollTrigger } from "@material-ui/core";
import * as React from "react";
const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={true} direction="down" in={!trigger} timeout={1000} >
      {children}
    </Slide>
  );
};
export default HideOnScroll;
