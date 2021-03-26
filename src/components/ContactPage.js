import React from "react";
import footerImg from "../images/footerPart.svg";
import '../App.css'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    background: "#bebcba",
    alignItems: "center",
  },
  footerImg: {
    width: "100%",
    marginTop: "18%",
    height: "50vh",
  },
  footerLogoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "60%",
    background: "#202020",
  },
  consentContainer: {
    display: "flex",
    width: "60%",
    fontSize: ".5rem",
  },
  realtor: {
    display: "flex",
  },
  input: {
    width: "60%",
    margin: "1%",
    height: "40px",
    background: "none",
    border: "solid 1.5px black",
  },
  button: {
    "&:hover": {
      backgroundColor: 'rgb(7, 177, 77, 0.42)'
    },
    width: "60%",
    height: "50px",
    color: "#fff",
    fontWeight: "700",
    border: "none",
    background: "#c42237",
    marginBottom: "80px",
  },
  p: {
    width: "60%",
    fontSize: ".7rem",
    fontWeight: "500",
  },
  checkboxes: {
    marginTop: "10%",
  },
  checkbox: {
    background: "#bebcba",
  },
  copyRight: {
    background: "#fff",
  },

}));
export default function ContactPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contactForm}>
        <h1>REGISTER FOR UPDATES</h1>
        <p className={classes.p}>
          Register to receive the latest info & news about this exciting
          <br />
          new development coming soon to South Cornell.
        </p>
        <input
          type="text"
          name="fName"
          placeholder="FIRST NAME*"
          className={classes.input}
        />
        <input
          type="text"
          name="lName"
          placeholder="LAST NAME*"
          className={classes.input}
        />
        <input
          type="email"
          name="email"
          placeholder="EMAIL*"
          className={classes.input}
        />
        <input
          type="text"
          name="phone"
          placeholder="PHONE NUMBER*"
          className={classes.input}
        />
        <br />
        <div className={classes.realtor}>
          <p>Are you a Realtor</p>
          <div className={classes.checkboxes}>
            <input className={classes.checkbox} type="checkbox" />
            <input className={classes.checkbox} type="checkbox" />
          </div>
        </div>

        <div className={classes.consentContainer}>
          <input type="checkbox" />
          <p className={classes.consent}>
            I consent. The builders of South Cornell seek your consent to send
            you commercial electronic messages (such as email). You may withdraw
            your consent at any time. By clicking above, you attest that you are
            the sole holder and user of this email account.
          </p>
        </div>
        <button id="reg-btn" className={classes.button}>REGISTER</button>
      </div>
      <div className={classes.footerLogoContainer}>
        <img className={classes.footerImg} src={footerImg} alt="header-img" />
        <div className={classes.copyRight}>
          <em>Privacy Policy</em>
          <p>
            Copyright© 2020 South Cornell by CountryWide and Lindvest. All
            rights reserved. Illustrations are artist’s concept only.
            Promotions, Pricing & Specifications subject to change without
            notice. E.&O.E.
          </p>
        </div>
      </div>
    </div>
  );
}
