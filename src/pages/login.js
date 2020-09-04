import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { LoginUser } from "../redux/actions/actions";
import { Button } from "@material-ui/core";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
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
    console.log(newUserData);
    this.props.LoginUser(newUserData, this.props.history);
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
          backgroundColor: "rgba(190, 158, 255, 0.2)",
          borderRadius: "3rem",
          marginTop: "1px",
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
          <h1>Login</h1>
          <TextField
            name="username"
            placeholder="Username"
            onChange={(e) => this.handleChange(e)}
            variant="outlined"
          />
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
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  LoginUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {
  LoginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
