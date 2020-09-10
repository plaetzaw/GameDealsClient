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
import Favorite from "@material-ui/icons/FavoriteOutlined";
import Eyes from "@material-ui/icons/PanoramaFishEye";
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
      steamAppID,
      steamAppID,
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
      salePrice,
      metacriticScore,
      steamRatingPercent,
      metacriticLink,
      thumb,
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
          </CardContent>

          <div style={{ backgroundColor: "red" }}>
            <Button
              size="small"
              color="primary"
              startIcon={<Favorite />}
              onClick={this.onSubmit}
            >
              Add To Favorites
            </Button>
          </div>
          <div style={{ backgroundColor: "teal" }}>
            <Button size="small" color="secondary" startIcon={<Eyes />}>
              <a href={`https://www.metacritic.com/${metacriticLink}`}>
                View On MetaCritic
              </a>
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
