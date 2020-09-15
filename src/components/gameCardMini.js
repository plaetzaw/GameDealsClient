import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from "@material-ui/core";
import Favorite from "@material-ui/icons/Bookmark";
import Vision from "@material-ui/icons/Visibility";
import Money from "@material-ui/icons/MonetizationOn";
import { ButtonGroup } from "@material-ui/core";
import { SubmitToFavorites } from "../redux/actions/actions";

// import Typography from "@material-ui/core/Typography";

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
    console.log("New task posted");
  };

  render() {
    const {
      title,
      normalPrice,
      salePrice,
      metacriticScore,
      steamRatingPercent,
      metacriticLink,
      thumb,
      dealID,
    } = this.props.data;

    return (
      <Card>
        <CardActionArea>
          <CardMedia component="img" src={thumb} />
          <CardContent>
            <h2>{title}</h2>
            MetaCritic Score: {metacriticScore}
            <br />
            Steam Score: {steamRatingPercent}
            <br />
            Current Price: {salePrice}
            <br />
            Normal Price: {normalPrice}
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
            <Button size="small" color="secondary" startIcon={<Vision />}>
              <a href={`https://www.metacritic.com/${metacriticLink}`}>
                View On MetaCritic
              </a>
            </Button>
          </div>
          <div style={{ backgroundColor: "lightgreen" }}>
            {/* <div style={{ backgroundColor: "yellow" }}> */}
            <Button
              size="medium"
              color="primary"
              startIcon={<Money />}
              href={`https://www.cheapshark.com/redirect?dealID=${dealID}
            `}
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
