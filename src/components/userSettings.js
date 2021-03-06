import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";
import { Button } from "@material-ui/core";
import {
  UpdateEmail,
  UpdateUsername,
  UpdatePassword,
  SnackbarSuccess,
  SnackbarError,
  SnackbarClear,
} from "../redux/actions/actions";

class userSettings extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  updateUsername = (e) => {
    e.preventDefault();
    const newUsername = {
      id: this.props.users.credentials.id,
      username: this.props.users.credentials.username,
      updatedusername: this.state.username,
    };
    console.log(newUsername);
    this.props.UpdateUsername(newUsername);
  };

  updateEmail = (e) => {
    e.preventDefault();
    const newEmail = {
      id: this.props.users.credentials.id,
      email: this.state.email,
    };
    console.log(newEmail);
    this.props.UpdateEmail(newEmail);
  };

  updatePassword = (e) => {
    e.preventDefault();
    const newPassword = {
      id: this.props.users.credentials.id,
      password: this.state.password,
    };
    console.log(newPassword);
    this.props.UpdatePassword(newPassword);
  };

  render() {
    return (
      <div
        style={{
          border: "#BE9EFF 1px solid",
          padding: "5rem",
          backgroundColor: "rgba(150, 202, 250, .25)",
          borderRadius: "3rem",
          marginTop: "1px",
        }}
      >
        <h1>Update User Information</h1>
        <h3>Update Username</h3>
        Current Username: {this.props.users.credentials.username}
        <form
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            border: "5px black",
            padding: "5px",
          }}
        >
          <TextField
            name="username"
            placeholder="Username"
            onChange={(e) => this.handleChange(e)}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="default"
            startIcon={<PlayForWorkIcon />}
            onClick={this.updateUsername}
          >
            Submit
          </Button>
        </form>
        <h3>Update Email Address</h3>
        Current Email: {this.props.users.credentials.email}
        <form
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            border: "5px black",
            padding: "5px",
          }}
        >
          <TextField
            name="email"
            placeholder="Email"
            onChange={(e) => this.handleChange(e)}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="default"
            startIcon={<PlayForWorkIcon />}
            onClick={this.updateEmail}
          >
            Submit
          </Button>
        </form>
        <h3>Update Password</h3>
        <form
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            border: "5px black",
            padding: "5px",
          }}
        >
          <TextField
            name="password"
            placeholder="Password"
            onChange={(e) => this.handleChange(e)}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="default"
            startIcon={<PlayForWorkIcon />}
            onClick={this.updatePassword}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

userSettings.propTypes = {
  UpdateEmail: PropTypes.func.isRequired,
  UpdateUsername: PropTypes.func.isRequired,
  UpdatePassword: PropTypes.func.isRequired,
  SnackbarSuccess: PropTypes.func.isRequired,
  SnackbarError: PropTypes.func.isRequired,
  SnackbarClear: PropTypes.func.isRequired,
  ui: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
  ui: state.ui,
});

const mapDispatchToProps = {
  UpdateEmail,
  UpdateUsername,
  UpdatePassword,
  SnackbarSuccess,
  SnackbarError,
  SnackbarClear,
};

export default connect(mapStateToProps, mapDispatchToProps)(userSettings);
