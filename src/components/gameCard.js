import React, { Component } from "react";
import { connect } from "react-redux";
import { DeleteFromFavorites } from "../redux/actions/actions";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
        <h1>
          {title} is rated at {steamRatingPercent}% based on {steamRatingCount}{" "}
          reviews classifying the game as {steamRatingText}
        </h1>
      </>
    ) : (
      <>
        <h2>There are no Steam Reviews for this title</h2>
      </>
    );

    let saleMarkup = !isOnSale ? (
      <>
        <h3>
          This game is not currently on sale. It's current price is ${salePrice}
        </h3>
      </>
    ) : (
      <>
        <h1>This game is currently on Sale!</h1>
        Current Price: {salePrice} Normal Price: {normalPrice} Savings %:
        {savings}
      </>
    );
    return (
      <Card style={{ backgroundColor: scoreColor }}>
        <CardActionArea>
          <CardMedia component="img" src={thumb} />
          <CardContent>
            <h1>{title}</h1>
            <br />
            <h2>Ratings</h2>
            {steamMarkup}
            <br />
            <div style={{ backgroundColor: scoreColor }}>
              Metacritic score: {metacriticScore}/100 Pricing
              <br />
            </div>
            {saleMarkup}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="medium"
            color="primary"
            href={`https://www.cheapshark.com/redirect?dealID=${dealID}
            `}
          >
            View this deal!
          </Button>
          <Button
            size="medium"
            color="primary"
            href={`https://www.metacritic.com/${metacriticLink}`}
          >
            View on MetaCritic!
          </Button>
          <Button size="medium" color="secondary" onClick={this.handleDelete}>
            Delete from Favorites
          </Button>
        </CardActions>
      </Card>
    );
  }
}

gameCard.propTypes = {
  DeleteFromFavorites: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  DeleteFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(gameCard);
