import React, { Component } from "react";
import { connect } from "react-redux";
import { DeleteFromFavorites, SetAlert } from "../redux/actions/actions";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import UnFavorite from "@material-ui/icons/BookmarkBorder";
import Vision from "@material-ui/icons/Visibility";
import Money from "@material-ui/icons/MonetizationOn";
import Alert from "@material-ui/icons/AddAlert";

class gameCard extends Component {
  handleDelete = () => {
    let userID = this.props.users.credentials.id;
    let id = this.props.data.id;
    let GameObj = {
      id: id,
      userID: userID,
    };
    this.props.DeleteFromFavorites(GameObj);
  };

  handleAlert = () => {
    let gameID = this.props.data.gameID;
    let email = this.props.users.credentials.email;
    let price = this.props.data.salePrice;
    let alertObj = {
      gameID: gameID,
      email: email,
      price: price,
    };
    this.props.SetAlert(alertObj);
    alert(
      `Email alert set for ${this.props.data.title} at ${price} to ${email}`
    );
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
      // gameID,
      // dealID,
      savings,
      thumb,
      salePrice,
      normalPrice,
      isOnSale,
      metacriticScore,
      // metacriticLink,
      steamRatingText,
      steamRatingPercent,
      steamRatingCount,
      steamCheckerBool,
      scoreColor,
      // dealRating,
    } = this.props.data;

    let steamMarkup = steamCheckerBool ? (
      <>
        <p>
          <b>Steam:</b>
          {title} is rated at {steamRatingPercent}% based on {steamRatingCount}{" "}
          reviews classifying the game as {steamRatingText}
        </p>
      </>
    ) : (
      <>
        <h2>There are no Steam Reviews for this title</h2>
      </>
    );

    let saleMarkup = !isOnSale ? (
      <>
        <p>
          This game is not currently on sale. It's current price is ${salePrice}
        </p>
      </>
    ) : (
      <>
        <h1>This game is currently on Sale!</h1>
        Current Price: ${salePrice} Normal Price: ${normalPrice} Savings:{" "}
        {savings}%
      </>
    );
    return (
      <Card>
        <CardActionArea>
          <CardMedia component="img" src={thumb} />
          <CardContent style={{ backgroundColor: scoreColor }}>
            <h1>{title}</h1>
            <br />
            <h2>Ratings</h2>
            {steamMarkup}
            <br />
            <b>Metacritic</b> {metacriticScore}/100
            <br />
            <h2>Prices</h2>
            {saleMarkup}
          </CardContent>
          <div style={{ backgroundColor: "teal" }}>
            <Button size="medium" startIcon={<Money />} onClick={this.openDeal}>
              <b>View this deal</b>
            </Button>
          </div>
          <div style={{ backgroundColor: "pink" }}>
            <Button
              size="medium"
              startIcon={<Vision />}
              onClick={this.openMetacritic}
            >
              <b>View on MetaCritic!</b>
            </Button>
          </div>
          <div style={{ backgroundColor: "yellow" }}>
            <Button
              size="medium"
              color="secondary"
              startIcon={<UnFavorite />}
              onClick={this.handleDelete}
            >
              <b>Remove from Favorites</b>
            </Button>
          </div>
          <div style={{ backgroundColor: "orange" }}>
            <Button
              size="medium"
              color="secondary"
              startIcon={<Alert />}
              onClick={this.handleAlert}
            >
              <b>Set Price Drop Alert</b>
            </Button>
          </div>
        </CardActionArea>
      </Card>
    );
  }
}

gameCard.propTypes = {
  DeleteFromFavorites: PropTypes.func.isRequired,
  SetAlert: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  DeleteFromFavorites,
  SetAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(gameCard);
