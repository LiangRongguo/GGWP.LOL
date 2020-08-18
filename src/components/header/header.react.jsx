import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.homeButton}
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
          <Typography variant="h6" className={classes.title} href="/">
            GGWP.LOL
          </Typography>
          <Button color="inherit" href="/champions">
            CHAMPIONS
          </Button>
          <Button color="inherit" href="/summoner">
            SUMMONER
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
