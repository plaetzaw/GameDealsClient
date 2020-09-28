import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import Favorite from "@material-ui/icons/Bookmark";
import Money from "@material-ui/icons/MonetizationOn";
import { SubmitToFavorites } from "../redux/actions/actions";

class gameCardCheapest extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    let { gameID } = this.props.data;
    // let userID = this.props.users.credentials.id;
    let GameObj = {
      //   userID: userID,
      gameID: gameID,
    };
    this.props.SubmitToFavorites(GameObj);
  };

  openDeal = (e) => {
    e.preventDefault();
    window.open(
      `https://www.cheapshark.com/redirect?dealID=${this.props.data.cheapestDealID}`
    );
  };

  render() {
    const { external, gameID, steamAppID, cheapest, thumb } = this.props.data;

    return (
      <Card
      // style={{ width: "50vh", height: "50vh" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            src={thumb}
            // style={{ maxWidth: "75vh", maxHeight: "35vh" }}
          />
          <CardContent
          // style={{ width: "300px" }}
          >
            <h2>{external}</h2>
            <br />
            Current Price: {cheapest}
            <br />
          </CardContent>

          <div style={{ backgroundColor: "magenta" }}>
            <Button
              size="small"
              color="primary"
              startIcon={<Favorite />}
              onClick={this.onSubmit}
            >
              Add To Favorites
            </Button>
          </div>
          <div style={{ backgroundColor: "lightgreen" }}>
            <Button
              size="medium"
              color="primary"
              startIcon={<Money />}
              onClick={this.openDeal}
            >
              View this deal!
            </Button>
          </div>
        </CardActionArea>
      </Card>
    );
  }
}

gameCardCheapest.propTypes = {
  SubmitToFavorites: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  SubmitToFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(gameCardCheapest);
