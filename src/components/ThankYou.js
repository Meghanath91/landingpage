import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import thankYouImg from "../images/thankyouImg.svg";
import logoImg from "../images/logo.png";
import buildersImg from "../images/builders.jpg"
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  thankYouImg: {
    height: "100vh",
  },
  logoImg: {},
}));
export default function ThankYou() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img className={classes.logoImg} src={logoImg} alt="logo-img" />
        <h1>
          THANK YOU <br /> FOR REGISTERING
        </h1>
        <p>
          You will now be among the first to receive news
          <br />
          and updates about South Cornell.
        </p>
        <img
          className={classes.builders}
          src={buildersImg}
          alt="builders-img"
        />
      </div>
      <img
        className={classes.thankYouImg}
        src={thankYouImg}
        alt="thank-you-img"
      />
    </div>
  );
}
