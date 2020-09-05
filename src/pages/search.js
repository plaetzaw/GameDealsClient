import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GameSearch from "../components/gameSearch";
import GameCard from "../components/gameCard";

export class search extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  render() {
    return (
      <div>
        This page will display a feed of games with the option to search for a
        specific game or specific title
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
