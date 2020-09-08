import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class gameCard extends Component {
  constructor() {
    super();
    this.state = {
      steamReviews: "",
      metacriticColor: "",
      testnumber: "",
    };
  }

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
      metacriticLink,
      steamRatingText,
      steamRatingPercent,
      steamRatingCount,
      dealRating,
    } = this.props.data;

    console.log(steamRatingPercent);

    // if ({ steamRatingPercent } === 0) {
    //   this.setState(() => ({
    //     steamReviews: false,
    //   }));
    // } else {
    //   this.setState(() => ({
    //     steamReviews: true,
    //   }));
    // }

    // if (metacriticScore > 80) {
    //   this.setState({
    //     metacriticColor: "green",
    //     testnumber: 1,
    //   });
    //   console.log(`Game is pretty good, it got a score of ${metacriticScore}`);
    // } else if (metacriticScore > 61 && metacriticScore < 80) {
    //   this.setState({
    //     metacriticColor: "yellow",
    //     testnumber: 2,
    //   });
    //   console.log(`Game is decent, it got a score of ${metacriticScore}`);
    // } else {
    //   this.setState({
    //     metacriticColor: "red",
    //     testnumber: 3,
    //   });
    //   console.log(`Game is not great, it got a score of ${metacriticScore}`);
    // }

    let steamMarkup = !this.state.steamReviews ? (
      <>There are no Steam Reviews for this title</>
    ) : (
      <>
        Steam: {steamRatingPercent} based on {steamRatingCount} reviews
        classifying the game as {steamRatingText}
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
      <Card>
        <CardActionArea>
          <CardMedia component="img" src={thumb} />
          <CardContent>
            <h1>{title}</h1>
            <br />
            <h2>Ratings</h2>
            {steamMarkup}
            <br />
            Steam: {steamRatingPercent} based on {steamRatingCount} reviews
            classifying the game as {steamRatingText}
            <br />
            <div style={{ backgroundColor: this.state.metacriticColor }}>
              Metacritic score: {metacriticScore}/100 Pricing
              <br />
              View the game on Metacritic!
            </div>
            {saleMarkup}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"></Button>
        </CardActions>
      </Card>
    );
  }
}
