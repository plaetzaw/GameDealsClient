import React, { Component } from "react";
import { layoutGenerator } from "react-break";
import TextField from "@material-ui/core/TextField";
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
import SpeedIcon from "@material-ui/icons/Speed";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { LogoutUser, QuickSearch } from "../../redux/actions/actions";

class UI extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSearch = (e) => {
    e.preventDefault();
    const gameInfo = {
      gameTitle: this.state.title,
    };
    console.log(gameInfo);
    this.props.QuickSearch(gameInfo);
    //redirected to QuickSearch  page
  };

  onLogout = () => {
    this.props.LogoutUser();
  };

  render() {
    const layout = layoutGenerator({
      mobile: 0,
      phablet: 550,
      tablet: 768,
      desktop: 992,
    });

    const OnMobile = layout.is("mobile");
    const Desktop = layout.isAtLeast("phablet");

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
            startIcon={<LoginIcon />}
            style={{
              color: "whitesmoke",
              // paddingLeft: "10rem",
              // paddingRight: "10rem",
            }}
            component={Link}
            to="/"
          ></Button>
        </Tooltip>
        <Tooltip title="Register">
          <Button
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
        <Desktop>
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
                  startIcon={<SearchIcon />}
                  component={Link}
                  style={{ color: "whitesmoke" }}
                  to="/search"
                ></Button>
              </Tooltip>
              <Tooltip title="Favorite">
                <Button
                  startIcon={<FavoriteIcon />}
                  style={{ color: "whitesmoke" }}
                  component={Link}
                  to="/favorites"
                ></Button>
              </Tooltip>
              <Tooltip title="Settings">
                <Button
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
                  startIcon={<GitHubIcon />}
                  style={{ color: "whitesmoke" }}
                  // component={Link}
                  href="https://github.com/plaetzaw/GameDealsClient"
                ></Button>
              </Tooltip>
              <Tooltip title="QuickSearch">
                <Button
                  startIcon={<SpeedIcon />}
                  style={{ color: "whitesmoke" }}
                  component={Link}
                  to="/QuickSearch"
                ></Button>
              </Tooltip>
              <div
                style={{
                  paddingLeft: "300px",
                  backgroundColor: "green",
                }}
              >
                <form>
                  <TextField
                    style={{ paddingLeft: "15 rem", backgroundColor: "yellow" }}
                    name="title"
                    variant="outlined"
                    placeholder="QuickSearch for a game"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <Button
                    startIcon={<SearchIcon />}
                    style={{ color: "whitesmoke", height: "3rem" }}
                    onClick={this.onSearch}
                  ></Button>
                </form>
              </div>
            </Toolbar>
          </AppBar>
        </Desktop>

        <OnMobile>
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
                  startIcon={<SearchIcon />}
                  component={Link}
                  style={{ color: "whitesmoke" }}
                  to="/search"
                ></Button>
              </Tooltip>
              <Tooltip title="Favorite">
                <Button
                  startIcon={<FavoriteIcon />}
                  style={{ color: "whitesmoke" }}
                  component={Link}
                  to="/favorites"
                ></Button>
              </Tooltip>
              <Tooltip title="Settings">
                <Button
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
                  startIcon={<GitHubIcon />}
                  style={{ color: "whitesmoke" }}
                  href="https://github.com/plaetzaw/GameDealsClient"
                ></Button>
              </Tooltip>
              <Tooltip title="QuickSearch">
                <Button
                  startIcon={<SpeedIcon />}
                  style={{ color: "whitesmoke" }}
                  component={Link}
                  to="/QuickSearch"
                ></Button>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </OnMobile>
      </div>
    );
  }
}

UI.propTypes = {
  LogoutUser: PropTypes.func.isRequired,
  QuickSearch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
});

const mapDispatchToProps = {
  LogoutUser,
  QuickSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(UI);
