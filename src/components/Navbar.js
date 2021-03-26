import { AppBar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo.svg";
import registerBtn from "../images/reigster-button-lg.jpg";

export default function Navbar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    appBar: {
      background: "#fff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    registerBtn: {},
    registerBtnImg: {
      height: "80px",
    },
    logoImg: {
      height: "80px",
      padding: "25px",
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar}>
        <img className={classes.logoImg} src={logo} alt="logo" />
        <img
          className={classes.registerBtnImg}
          src={registerBtn}
          alt="register-button"
        />
      </AppBar>
    </div>
  );
}
