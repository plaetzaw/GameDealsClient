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
        <Button
          label="Login"
          startIcon={<LoginIcon />}
          style={{ color: "whitesmoke" }}
          component={Link}
          to="/"
        ></Button>
        <Button
          label="Register"
          startIcon={<RegisterIcon />}
          style={{ color: "whitesmoke" }}
          component={Link}
          to="/register"
        ></Button>
      </>
    );

    let logoutMarkup = loggedIn ? (
      <>
        <Button
          style={{
            alignSelf: "left",
            justifyContent: "left",
            color: "whitesmoke",
          }}
          label="logout"
          startIcon={<LogoutIcon />}
          onClick={() => {
            console.log("I Have Been Clicked");
            this.props.LogoutUser();
          }}
        ></Button>
      </>
    ) : (
      <></>
    );

    return (
      <div>
        <AppBar
          position="sticky-top"
          style={{
            border: "royalblue 2px solid",
            padding: "0px,0px,0px,0px",
            backgroundColor: "#6bb8ff",
            // borderRadius: "3rem",
            marginBottom: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            {loginMarkup}
            <Button
              label="Search"
              startIcon={<SearchIcon />}
              component={Link}
              style={{ color: "whitesmoke" }}
              to="/search"
            ></Button>
            <Button
              label="Favorite"
              startIcon={<FavoriteIcon />}
              style={{ color: "whitesmoke" }}
              component={Link}
              to="/favorites"
            ></Button>
            <Button
              label="Settings"
              startIcon={<SettingsIcon />}
              style={{ color: "whitesmoke" }}
              component={Link}
              to="/Settings"
            ></Button>
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
