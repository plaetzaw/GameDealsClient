import React, { Component } from "react";
import GameCard from "../components/gameCard";
import { GetUserGames } from "../redux/actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class favorites extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  componentDidMount() {
    const userID = {
      userID: this.props.users.credentials.id,
    };
    console.log(userID);
    this.props.GetUserGames(userID);
  }

  render() {
    return (
      <div>
        This page will display a feed of games with the option to favorites for
        a specific game or specific title
      </div>
    );
  }
}

favorites.propTypes = {
  GetUserGames: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
});

const mapDispatchToProps = {
  GetUserGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(favorites);
