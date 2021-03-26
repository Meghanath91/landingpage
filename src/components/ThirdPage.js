import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import bestMomentImg from "../images/bestmoment-lg.jpg";
import bestMomentImg2 from "../images/bestmoment2.jpg";
import bestMomentImg3 from "../images/bestmoment3.jpg";
import arrowImg from "../images/leftArrow.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "sofia-pro, sans-serif;",
    background: "#fff",
  },
  bestMomentImg: {
    width: "100%",
    height: "45vh",
  },
  imgContainer: {
    display: "flex",
  },
  arrowImg: {
    width: "50px",
    marginRight: "5%",
    marginLeft: "8%",
    marginTop: "6vh",
  },
  specialText: {
    color: "#c42237",
  },
  titleContainer: {
    display: "flex",
    width: "100%",
  },
  p: {
    width: "70%",
    margin: "0px",
    marginRight: "0px",
    paddingRight: "0px",
  },
  bestMomentImg2: {
    padding: "3%",
    width: "35%",
  },
  bestMomentImg3: {
    padding: "3%",
    width: "35%",
  },
  text: {
    width: "100%",
    margin: "0px",
  },

}));
export default function ThirdPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.bestMomentImg}
        src={bestMomentImg}
        alt="arrow-img"
      />

      <section className={classes.rightContainer}>
        <div className={classes.titleContainer}>
          <img className={classes.arrowImg} src={arrowImg} alt="arrow-img" />
          <div className={classes.text}>
            <h1 className={classes.h1}>
              THE BEST MOMENTS
              <br />
              <span className={classes.specialText}>ALL AROUND YOU</span>
            </h1>
            <p className={classes.p}>
              Just East of Bur Oak to Donald Cousens Pkwy, Cornell’s community
              village provides some of the most prestigious amenities the city
              of Markham has to o er. These new homes in Markham are just
              moments from top-rated schools, farmers’ markets, an abundance of
              natural parks and various transportation opportunities. This
              pedestrian-friendly neighbourhood o ers a village lifestyle within
              the bounds of a bustling city. Go for a stroll along peaceful
              tree-lined streets. Visit nearby parks for a place the kids can
              play, dine at popular restaurants, stop for a treat and shop at
              high-end stores inside Markville Shopping Centre. Find life’s best
              balance at South Cornell.
            </p>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <img
            className={classes.bestMomentImg2}
            src={bestMomentImg2}
            alt="arrow-img"
          />{" "}
          <img
            className={classes.bestMomentImg3}
            src={bestMomentImg3}
            alt="arrow-img"
          />
        </div>
      </section>
    </div>
  );
}
