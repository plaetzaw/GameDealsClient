import React, { Component } from "react";
import GameCard from "../components/gameCard";
import { GetUserGames } from "../redux/actions/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

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
    const { data } = this.props;
    const gameInfo = data.favorites;
    console.log(gameInfo);

    const gameMarkup = gameInfo.map((card) => {
      return <GameCard key={card.id} data={card} />;
    });

    return (
      <div
        style={{
          border: "#BE9EFF 1px solid",
          // padding: "5rem",
          backgroundColor: "rgba(190, 158, 255, 0.2)",
          borderRadius: "3rem",
          marginTop: "1px",
          display: "grid",
          paddingBottom: "5px",

          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Grid
          container
          direction="row-reverse"
          justify="space-evenly"
          alignItems="flex-start"
          // spacing={3}
        >
          <Grid item xs={12} md={12} lg={"auto"} xl={"auto"}>
            {gameMarkup}
          </Grid>
        </Grid>
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
