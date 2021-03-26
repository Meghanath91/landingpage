import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import heroImg from "../images/deserve.jpg";
import arrowImg from "../images/leftArrow.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    background: "#fff"
  },
  leftContainer: {
    display: "flex",

    alignItems: "flex-start",
  },
  heroImg: {
    width: "50%",
    height: "100vh",
  },
  arrowImg: {
    width: "50px",
    marginRight: "5%",
    marginTop: "6vh",
  },
  text: {
    fontFamily: "sofia-pro, sans-serif;",
  },
  best: {
    color: "#c42237",
  },
  h1: {
    fontSize: "2rem",
  },
  p: {
    width: "70%",
    fontSize: ".8rem"
  }
}));
export default function SecondPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <img className={classes.arrowImg} src={arrowImg} alt="arrow-img" />
        <section className={classes.text}>
          <h1 className={classes.h1}>
            YOU DESERVE
            <br />
            THE <span className={classes.best}>BEST</span>
          </h1>
          <p className={classes.p}>
            Located in the desirable Cornell village, South Cornell is the
            pinnacle of Markham living. With a limited batch of lots on one of
            the last remaining pieces of picturesque southern land, bask in
            unobstructed views of sunlight. With ample opportunities for
            leisurely escapes, rest in the assurance you’ve got the best of
            Cornell. The Boulevards — phase 1 of these new homes in Markham
            consists of 28’ and 32’ detached singles. <br />
            <br />
            This visionary collection invites you to capture the lifestyle of
            your dreams. Bounded by world-class shopping centres, big-box
            retailers, and endless amenities, close to central express routes
            Highway 7 and 407, these new homes in Markham are the centre of
            modern living.
          </p>
        </section>
      </div>
      <img className={classes.heroImg} src={heroImg} alt="thank-you-img" />
    </div>
  );
}
