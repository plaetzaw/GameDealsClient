import React, { Component } from "react";
import GameCard from "../components/gameCard";

export class favorites extends Component {
  render() {
    return (
      <div>
        User Favorited Games will be displayed on this page
        <GameCard />
      </div>
    );
  }
}

export default favorites;
