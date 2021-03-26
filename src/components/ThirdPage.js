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
    height: "50vh",
  },
  imgContainer: {
    display: "flex",
    paddingLeft: "5%",
    justifyContent: "space-between",
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
    alignItems: "flex-start",
    width: "100%",
  },
  h1: {

    fontSize: "2rem",
    fontFamily: "sofia-pro, sans-serif",
    fontStyle: 'normal',
    fontWeight: '400'
  },
  p: {
    width: "100%",
    margin: "0px",
    paddingRight: "15%",
    paddingBottom: "15%",
    fontSize: ".8rem",
  },
  bestMomentImg2: {
    width: "45%",
    marginRight: "5%",
  },
  bestMomentImg3: {
    width: "55%",
  },
  text: {
    width: "100%",
    margin: "0px",
  },
  rightContainer: {
    paddingTop: "3%",
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
              THE <span className={classes.specialText}>BEST</span> MOMENTS
              <br />
              ALL AROUND YOU
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
          />
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
