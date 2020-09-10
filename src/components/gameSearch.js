import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import Button from "@material-ui/core/Button";
import { GetGamesByTitle } from "../redux/actions/actions";
import GameCardMini from "./gameCardMini";
import Grid from "@material-ui/core/Grid";

class gameSearch extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSearch = (e) => {
    e.preventDefault();
    const gameTitle = {
      gameTitle: this.state.title,
    };
    this.props.GetGamesByTitle(gameTitle);
  };

  render() {
    const { data } = this.props;
    const searchData = data.searchedGames;

    const searchMarkup = searchData.map((card) => {
      return <GameCardMini key={card.id} data={card} />;
    });

    const searchCard = data.searchedGame ? (
      <>Hey is this thing working</>
    ) : (
      <>{searchMarkup}</>
    );

    return (
      <div>
        This component will search for games
        <form>
          <TextField
            name="title"
            variant="outlined"
            placeholder="Game Title"
            onChange={(e) => this.handleChange(e)}
          />
          <Button
            variant="contained"
            color="default"
            startIcon={<SearchIcon />}
            onClick={this.onSearch}
          >
            Search!
          </Button>
        </form>
        <Grid container spacing={3}>
          {searchCard}
        </Grid>
      </div>
    );
  }
}

gameSearch.propTypes = {
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
});

const mapDispatchToProps = {
  GetGamesByTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(gameSearch);
