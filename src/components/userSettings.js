import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";
import { Button } from "@material-ui/core";

export class userSettings extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  updateUsername = (e) => {
    e.preventDefault();
    const newUsername = {
      username: this.state.username,
    };
    console.log(newUsername);
    this.props.UpdateUsername(newUsername);
  };

  updateEmail = (e) => {
    e.preventDefault();
    const newEmail = {
      email: this.state.email,
    };
    console.log(newEmail);
    this.props.UpdateEmail(newEmail);
  };

  updatePassword = (e) => {
    e.preventDefault();
    const newPassword = {
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
          backgroundColor: "rgba(190, 158, 255, 0.2)",
          borderRadius: "3rem",
          marginTop: "1px",
        }}
      >
        <h1>Update User Information</h1>
        <h3>Update Username</h3>
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
          ></Button>
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

export default userSettings;
