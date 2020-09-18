import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GameSearch from "../components/gameSearch";

export class search extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  render() {
    return (
      <div
        style={{
          border: "#BE9EFF 1px solid",
          padding: "2rem",
          backgroundColor: "rgba(190, 158, 255, 0.2)",
          borderRadius: "3rem",
          marginTop: "1px",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GameSearch />
      </div>
    );
  }
}

search.propTypes = {
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(search);
