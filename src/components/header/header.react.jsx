import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          className="homeButton"
          color="inherit"
          aria-label="home"
          size="small"
        >
          <Link className="logo-container" to="/">
            <img
              src="https://img.pngio.com/league-of-legends-icon-png-204256-free-icons-library-league-of-legends-icon-png-512_512.jpg"
              alt="League Of Legends Icon Png #204256 - Free Icons Library"
              height="48"
              width="48"
            />
          </Link>
        </IconButton>
        <Typography variant="h6" className="title" href="/">
          GGWP.LOL
        </Typography>
        <div className="options">
          <Link className="option" to="/champions">
            CHAMPIONS
          </Link>
          <Link className="option" to="/summoner">
            SUMMONER
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
