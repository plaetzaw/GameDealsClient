import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LoginIcon from "@material-ui/icons/LockOpen";
import RegisterIcon from "@material-ui/icons/PersonAdd";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import LogoutIcon from "@material-ui/icons/ExitToAppOutlined";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "yellow",
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Button
            label="Login"
            className={classes.menuButton}
            startIcon={<LoginIcon />}
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <Button
            label="Register"
            className={classes.menuButton}
            startIcon={<RegisterIcon />}
          >
            Register
          </Button>
          <Button
            label="Search"
            className={classes.menuButton}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
          <Button
            label="Favorite"
            color="white"
            className={classes.menuButton}
            startIcon={<FavoriteIcon />}
          >
            Favorite
          </Button>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button
            label="logout"
            className={classes.menuButton}
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
