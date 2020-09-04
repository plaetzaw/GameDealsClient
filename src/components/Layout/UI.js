import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
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
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { LogoutUser } from "../../redux/actions/actions";

class UI extends Component {
  onLogout = () => {
    this.props.LogoutUser();
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              // className={classes.menuButton}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Button
              label="Login"
              // className={classes.menuButton}
              startIcon={<LoginIcon />}
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              label="Register"
              // className={classes.menuButton}
              startIcon={<RegisterIcon />}
              component={Link}
              to="/register"
            >
              Register
            </Button>
            <Button
              label="Search"
              // className={classes.menuButton}
              startIcon={<SearchIcon />}
              component={Link}
              to="/search"
            >
              Search
            </Button>
            <Button
              label="Favorite"
              // className={classes.menuButton}
              startIcon={<FavoriteIcon />}
              component={Link}
              to="/favorites"
            >
              Favorite
            </Button>
            <Typography variant="h6"></Typography>
            <Button
              label="logout"
              // className={classes.menuButton}
              startIcon={<LogoutIcon />}
              onClick={() => {
                console.log("I Have Been Clicked");
                this.props.LogoutUser();
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

UI.propTypes = {
  LogoutUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  LogoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UI);
