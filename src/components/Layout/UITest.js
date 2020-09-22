import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LoginIcon from "@material-ui/icons/LockOpen";
import RegisterIcon from "@material-ui/icons/PersonAdd";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import LogoutIcon from "@material-ui/icons/ExitToAppOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LogoutUser } from "../../redux/actions/actions";

onLogout = () => {
  this.props.LogoutUser();
};

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

const useStyles = makeStyles({
  root: {
    //   width: "100%",
    backgroundColor: "#BE9EFF",
    //   justifyContent: "center",
  },
});
function LabelBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      style={{
        position: "fixed",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        boxShadow: "0px 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      {loginMarkup}

      <BottomNavigationAction
        component={Link}
        to="/search"
        value="search"
        icon={<SearchIcon style={{ color: "#fff" }} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/favorites"
        value="Favorite"
        icon={<FavoriteIcon style={{ color: "#fff" }} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/Settings"
        value="Settings"
        icon={<SettingsIcon style={{ color: "#fff" }} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        value="Logout"
        icon={<SignOutIcon style={{ color: "#fff" }} />}
        onClick={() => {
          localStorage.removeItem("JWToken");
          props.LogoutUser();
        }}
      />
      {logoutMarkup}
    </BottomNavigation>
  );
}

LabelBottomNavigation.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelBottomNavigation);
