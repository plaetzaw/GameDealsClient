import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import Button from "@material-ui/core/Button";
import { QuickSearch } from "../redux/actions/actions";
import GameCardCheapest from "./gameCardCheapest";
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
    this.props.QuickSearch(gameTitle);
  };

  render() {
    const { data } = this.props;
    const searchData = data.searchedGames;

    const searchMarkup = searchData.map((card) => {
      return <GameCardCheapest key={card.id} data={card} />;
    });

    const searchCard = data.searchedGame ? (
      <>Hey is this thing working</>
    ) : (
      <>{searchMarkup}</>
    );

    return (
      <div>
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
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={6} lg={6} xl={6}>
            {searchCard}
          </Grid>
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
  QuickSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(gameSearch);
