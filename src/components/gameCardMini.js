import React, { Component } from "react";
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
// import Typography from "@material-ui/core/Typography";

export class gameCardMini extends Component {
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
            <Button size="small" color="primary" startIcon={<Favorite />}>
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

export default gameCardMini;
