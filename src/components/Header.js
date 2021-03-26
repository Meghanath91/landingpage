import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import headerImg from "../images/top-header-desktop.jpg";
const useStyles = makeStyles((theme) => ({
  headerImg: {
    height: "100vh",
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
