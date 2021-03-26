import React from "react";
import headerImg from "../images/top-header-desktop.jpg";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  headerImg: {
    width: "100%",
    // height: "100vh",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.headerImg} src={headerImg} alt="header-img" />
    </div>
  );
}
