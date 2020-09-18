import React, { Component } from "react";
import { connect } from "react-redux";
import { DeleteFromFavorites, SetAlert } from "../redux/actions/actions";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import UnFavorite from "@material-ui/icons/BookmarkBorder";
import Vision from "@material-ui/icons/Visibility";
import Money from "@material-ui/icons/MonetizationOn";
import Alert from "@material-ui/icons/AddAlert";
import Toast from "../components/toast";

// import Typography from "@material-ui/core/Typography";

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
  render() {
    const {
      id,
      title,
      gameID,
      dealID,
      savings,
      thumb,
      salePrice,
      normalPrice,
      isOnSale,
      metacriticScore,
      metacriticLink,
      steamRatingText,
      steamRatingPercent,
      steamRatingCount,
      steamCheckerBool,
      scoreColor,
      dealRating,
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
        </CardActionArea>
        <CardActions>
          <Button
            style={{ backgroundColor: "teal" }}
            size="medium"
            startIcon={<Money />}
            href={`https://www.cheapshark.com/redirect?dealID=${dealID}
            `}
          >
            <b>View this deal</b>
          </Button>
          <Button
            style={{ backgroundColor: "pink" }}
            size="medium"
            startIcon={<Vision />}
            href={`https://www.metacritic.com/${metacriticLink}`}
          >
            <b>View on MetaCritic!</b>
          </Button>
          <Button
            style={{ backgroundColor: "yellow" }}
            size="medium"
            color="secondary"
            startIcon={<UnFavorite />}
            onClick={this.handleDelete}
          >
            <b>Remove from Favorites</b>
          </Button>
          <Button
            style={{ backgroundColor: "orange" }}
            size="medium"
            color="secondary"
            startIcon={<Alert />}
            onClick={this.handleAlert}
          >
            <b>Set Price Drop Alert</b>
          </Button>
        </CardActions>
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
