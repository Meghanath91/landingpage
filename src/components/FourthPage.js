import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import arrowImg from "../images/leftArrow.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from "../images/1.jpg";
import slide2 from "../images/2.jpg";
import slide3 from "../images/3.jpg";
import slide4 from "../images/4.jpg";
import '../App.css'

const useStyles = makeStyles((theme) => ({
  headerImg: {
    width: "100%",
    // height: "100vh",
  },
  specialText: {
    color: "#c42237",
  },
  h1: {
    fontSize: "2rem",
  },
  arrowImg: {
    width: "50px",
    marginRight: "5%",
    marginLeft: "8%",
    marginTop: "6vh",
  },
  p: {
    width: "100%",
    margin: "0px",
    paddingRight: "15%",
    paddingBottom: "15%",
    fontSize: ".8rem",
  },
  titleContainer: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
  },

}));

export default function FourthPage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.titleContainer}>
        <img className={classes.arrowImg} src={arrowImg} alt="arrow-img" />
        <div className={classes.textContainer}>
          <h1 className={classes.h1}>
            THE <span className={classes.specialText}>BEST</span> OF EVERYTHING
          </h1>
          <p className={classes.p}>
            South Cornell is a collaboration between two well- renowned builders
            providing you with the most exquisite flourishes to create a truly
            distinctive collection of new homes in Markham. At South Cornell,
            you can be sure to have nothing but the best designs and
            architecture showcasing an alluring curb appeal. Every detail is
            thoughtfully planned to perfection and crafted to build a home you
            will love for years to come.
          </p>
        </div>
      </div>

      <div>
        <Carousel>
          <div>
            <img src={slide1} alt={"slide1"} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={slide2} alt={"slide2"} />

          </div>
          <div>
            <img src={slide3} alt={"slide3"} />

          </div>
          <div>
            <img src={slide4} alt={"slide3"} />

          </div>
        </Carousel>

      </div>
    </div>
  );
}
