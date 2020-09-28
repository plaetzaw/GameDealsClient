import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LoginIcon from "@material-ui/icons/LockOpen";
import RegisterIcon from "@material-ui/icons/PersonAdd";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import LogoutIcon from "@material-ui/icons/ExitToAppOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import GitHubIcon from "@material-ui/icons/GitHub";
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
      <div
        style={{
          display: "grid",
          alignSelf: "left",
          justifyContent: "flex-start",
        }}
      >
        Welcome {this.props.users.credentials.username}!
      </div>
    ) : (
      <>
        <Tooltip title="Login">
          <Button
            label="Login"
            startIcon={<LoginIcon />}
            style={{ color: "whitesmoke" }}
            component={Link}
            to="/"
          ></Button>
        </Tooltip>
        <Tooltip title="Register">
          <Button
            label="Register"
            startIcon={<RegisterIcon />}
            style={{ color: "whitesmoke" }}
            component={Link}
            to="/register"
          ></Button>
        </Tooltip>
      </>
    );

    let logoutMarkup = loggedIn ? (
      <>
        <Tooltip title="Logout">
          <Button
            style={{
              color: "whitesmoke",
            }}
            label="logout"
            startIcon={<LogoutIcon />}
            onClick={() => {
              console.log("I Have Been Clicked");
              this.props.LogoutUser();
            }}
          ></Button>
        </Tooltip>
      </>
    ) : (
      <></>
    );

    return (
      <div>
        <AppBar
          position="sticky"
          style={{
            border: "royalblue 2px solid",
            backgroundColor: "#6bb8ff",
            // borderRadius: "3rem",
            marginBottom: "5px",
            alignItems: "center",
            justifyContent: "center",
            // paddingRight: "20rem",
          }}
        >
          <Toolbar>
            {loginMarkup}
            <Tooltip title="Search">
              <Button
                aria-label="Search"
                label="Search"
                startIcon={<SearchIcon />}
                component={Link}
                style={{ color: "whitesmoke" }}
                to="/search"
              ></Button>
            </Tooltip>
            <Tooltip title="Favorite">
              <Button
                label="Favorite"
                startIcon={<FavoriteIcon />}
                style={{ color: "whitesmoke" }}
                component={Link}
                to="/favorites"
              ></Button>
            </Tooltip>
            <Tooltip title="Settings">
              <Button
                label="Settings"
                startIcon={<SettingsIcon />}
                style={{ color: "whitesmoke" }}
                component={Link}
                to="/Settings"
              ></Button>
            </Tooltip>
            <Typography variant="h6"></Typography>

            {logoutMarkup}

            <Tooltip title="Project Github">
              <Button
                label="Github"
                startIcon={<GitHubIcon />}
                style={{ color: "whitesmoke" }}
                // component={Link}
                href="https://github.com/plaetzaw/GameDealsClient"
              ></Button>
            </Tooltip>
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
