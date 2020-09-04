import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class gameCard extends Component {
  render() {
    const {
      id,
      title,
      gameID,
      savings,
      thumb,
      salePrice,
      normalPrice,
      isOnSale,
      metacriticScore,
      steamRatingText,
      steamRatingPercent,
      steamRatingCount,
      dealRating,
    } = this.props.data;

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
        {savings}
      </>
    );
    return (
      <Card>
        <CardActionArea>
          <CardMedia component="img" src={thumb} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
              <br />
              <h2>Ratings</h2>
              Steam: {steamRatingPercent} based on {steamRatingCount} reviews
              classifying the game as {steamRatingText}
              <br />
              Metacritic score: {metacriticScore}/100
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <h3>Pricing</h3>
              {saleMarkup}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"></Button>
        </CardActions>
      </Card>
    );
  }
}
