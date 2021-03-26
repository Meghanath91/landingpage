import React from "react";
import footerImg from "../images/topfooter.jpg";
import arrowImg from "../images/leftArrow.svg";
import buildersImg from "../images/builders.jpg"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#fff"
  },
  footerImg: {
    width: "50%"
  },
  buildersImg: {
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
    paddingTop: "10%",
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
  }
}));
export default function FifthPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.footerImg} src={footerImg} alt="thank-you-img" />
      <div className={classes.titleContainer}>
        <img className={classes.arrowImg} src={arrowImg} alt="arrow-img" />
        <div className={classes.textContainer}>
          <h1 className={classes.h1}>
            GOOD, BETTER, <span className={classes.specialText}>BEST</span>. WHY
          SETTLE FOR LESS?
        </h1>
          <p className={classes.p}>
            CountryWide Homes is dedicated to building and doing business to a
            higher standard. This means striving to add innovative and beautiful
            designs to our portfolio, pioneering new ways to develop homes, and
            building trust with each and every one of our customers through
            premium homes and communities. The right attitude, the right level of
            service and the perfect approach enable CountryWide Homes to deliver
            on A New Level.
          <br />
          Lindvest Homes is devoted to delivering quality materials and proven
          methodologies at the highest construction level. Continually earning
          the respect of homeowners through responsiveness and honesty, Linvest
          works each day to improve the quality of client’s lives. Choosing
          established and up-and-coming locations, we design for real people
          through architecture and interior designs that are beautiful and
          functional.
        </p>

          <img
            className={classes.buildersImg}
            src={buildersImg}
            alt="builders-img"
          />
        </div>
      </div>

    </div>
  );
}
