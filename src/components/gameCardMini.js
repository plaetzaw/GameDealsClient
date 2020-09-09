import React, { Component } from "react";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

export class gameCardMini extends Component {
  render() {
    const { title } = this.props.data;
    return (
      <Card>
        <h2>{title}</h2>
      </Card>
    );
  }
}

export default gameCardMini;
