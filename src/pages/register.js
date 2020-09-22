import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { RegisterUser } from "../redux/actions/actions";
import { Button } from "@material-ui/core";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Initiating Registration");
    const newUserData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.RegisterUser(newUserData, this.props.history);
    alert("User successfully registered! You may now login");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
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
          minHeight: "65vh",
        }}
      >
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
          <h1>Registration</h1>
          <TextField
            name="username"
            placeholder="Username"
            onChange={(e) => this.handleChange(e)}
            variant="outlined"
          />
          <TextField
            name="email"
            placeholder="Email Address"
            onChange={(e) => this.handleChange(e)}
            variant="outlined"
          />
          <TextField
            name="password"
            placeholder="Password"
            onChange={(e) => this.handleChange(e)}
            variant="outlined"
            type="password"
          />
          <Button
            variant="contained"
            color="default"
            startIcon={<PlayForWorkIcon />}
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  RegisterUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {
  RegisterUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
