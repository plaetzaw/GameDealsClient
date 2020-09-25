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
import Vision from "@material-ui/icons/Visibility";
import Money from "@material-ui/icons/MonetizationOn";
import { SubmitToFavorites } from "../redux/actions/actions";

class gameCardMini extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    let {
      title,
      storeID,
      gameID,
      normalPrice,
      salePrice,
      savings,
      isOnSale,
      metacriticLink,
      metacriticScore,
      steamRatingText,
      steamRatingPercent,
      steamRatingCount,
      steamAppID,
      releaseDate,
      lastChange,
      dealRating,
      thumb,
      dealID,
    } = this.props.data;
    let userID = this.props.users.credentials.id;
    let GameObj = {
      title: title,
      storeID: storeID,
      gameID: gameID,
      normalPrice: normalPrice,
      salePrice: salePrice,
      savings: savings,
      isOnSale: isOnSale,
      metacriticLink: metacriticLink,
      metacriticScore: metacriticScore,
      steamRatingText: steamRatingText,
      steamRatingPercent: steamRatingPercent,
      steamRatingCount: steamRatingCount,
      steamAppID: steamAppID,
      releaseDate: releaseDate,
      lastChange: lastChange,
      dealRating: dealRating,
      thumb: thumb,
      dealID: dealID,
      userID: userID,
    };
    this.props.SubmitToFavorites(GameObj);
  };

  openMetacritic = (e) => {
    e.preventDefault();
    window.open(`https://www.metacritic.com/${this.props.data.metacriticLink}`);
  };

  openDeal = (e) => {
    e.preventDefault();
    window.open(
      `https://www.cheapshark.com/redirect?dealID=${this.props.data.dealID}`
    );
  };

  render() {
    const {
      title,
      normalPrice,
      salePrice,
      metacriticScore,
      steamRatingPercent,
      // metacriticLink,
      thumb,
      // dealID,
      dealRating,
    } = this.props.data;

    return (
      <Card
      // style={{ width: "50vh", height: "50vh" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            src={thumb}
            style={{ maxWidth: "75vh", maxHeight: "35vh" }}
          />
          <CardContent
          // style={{ width: "300px" }}
          >
            <h2>{title}</h2>
            MetaCritic Score: {metacriticScore}
            <br />
            Steam Score: {steamRatingPercent}
            <br />
            Current Price: {salePrice}
            <br />
            Normal Price: {normalPrice}
            <br />
            Sale Rating: {dealRating}/10
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
          <div style={{ backgroundColor: "pink" }}>
            <Button
              size="small"
              color="secondary"
              startIcon={<Vision />}
              onClick={this.openMetacritic}
            >
              View On MetaCritic
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

gameCardMini.propTypes = {
  SubmitToFavorites: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  SubmitToFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(gameCardMini);
