import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LoginIcon from "@material-ui/icons/LockOpen";
import RegisterIcon from "@material-ui/icons/PersonAdd";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import LogoutIcon from "@material-ui/icons/ExitToAppOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { LogoutUser } from "../../redux/actions/actions";

class UI extends Component {
  onLogout = () => {
    this.props.LogoutUser();
  };

  render() {
    const { loggedIn } = this.props.users;

    let loginMarkup = loggedIn ? (
      <>Welcome {this.props.users.credentials.username}!</>
    ) : (
      <>
        <Button label="Login" startIcon={<LoginIcon />} component={Link} to="/">
          Login
        </Button>
        <Button
          label="Register"
          startIcon={<RegisterIcon />}
          component={Link}
          to="/register"
        >
          Register
        </Button>
      </>
    );

    let logoutMarkup = loggedIn ? (
      <>
        <Button
          label="logout"
          startIcon={<LogoutIcon />}
          onClick={() => {
            console.log("I Have Been Clicked");
            this.props.LogoutUser();
          }}
        >
          Logout
        </Button>
      </>
    ) : (
      <></>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {loginMarkup}
            <Button
              label="Search"
              startIcon={<SearchIcon />}
              component={Link}
              to="/search"
            >
              Search
            </Button>
            <Button
              label="Favorite"
              startIcon={<FavoriteIcon />}
              component={Link}
              to="/favorites"
            >
              Favorite
            </Button>
            <Button
              label="Settings"
              startIcon={<SettingsIcon />}
              component={Link}
              to="/Settings"
            >
              Settings
            </Button>
            <Typography variant="h6"></Typography>

            {logoutMarkup}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

UI.propTypes = {
  LogoutUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
});

const mapDispatchToProps = {
  LogoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UI);
