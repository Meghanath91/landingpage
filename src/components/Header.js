import React from "react";
import headerImg from "../images/top-header-desktop.jpg";
import headerImgMob from "../images/top-header-mobile@2x.jpg"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  headerImg: {
    width: "100%",
  },
  headerImgMob: {
    width: "100%",
    marginTop: "15%"
  }
}));

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");

  if (matches) {
    return (
      <div>
        <img className={classes.headerImgMob} src={headerImgMob} alt="header-img" />
      </div>
    );
  }
  return (
    <div>
      <img className={classes.headerImg} src={headerImg} alt="header-img" />
    </div>
  );
}
