import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import Button from "@material-ui/core/Button";
import { AdvancedSearch } from "../redux/actions/actions";
import GameCardMini from "./gameCardMini";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

class advancedSearch extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      maxPrice: "",
      checked: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //   handleCheck = () => {
  //     this.setState((state) => ({
  //       isOpen: !state.isOpen,
  //     }));
  //   };

  onCheck = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  onSearch = (e) => {
    e.preventDefault();
    const gameInfo = {
      gameTitle: this.state.title,
      maxPrice: this.state.maxPrice,
      onSale: this.state.onSale,
    };
    console.log(gameInfo);
    this.props.AdvancedSearch(gameInfo);
  };

  render() {
    function valuetext(value) {
      return `${value}`;
    }

    const marks = [
      {
        value: 0,
        label: "$0",
      },
      {
        value: 5,
        label: "$5",
      },
      {
        value: 10,
        label: "$10",
      },
      {
        value: 15,
        label: "$15",
      },
      {
        value: 20,
        label: "$20",
      },
      {
        value: 25,
        label: "$25",
      },
      {
        value: 30,
        label: "$30",
      },
      {
        value: 35,
        label: "$35",
      },
      {
        value: 40,
        label: "$40",
      },
      {
        value: 45,
        label: "$45",
      },
      {
        value: 50,
        label: "$50",
      },
      {
        value: 55,
        label: "$55",
      },
      {
        value: 60,
        label: "$60",
      },
    ];
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
        <form>
          <TextField
            name="title"
            variant="outlined"
            placeholder="Game Title"
            onChange={(e) => this.handleChange(e)}
          />
          <div style={{ width: 500, height: 75 }}>
            <Typography id="discrete-slider-always" gutterBottom>
              Select Maximum Price
            </Typography>
            <Slider
              name="maxPrice"
              defaultValue={60}
              getAriaValueText={valuetext}
              onChange={(e) => this.handleChange(e)}
              aria-labelledby="discrete-slider-always"
              step={5}
              marks={marks}
              valueLabelDisplay="on"
              min={0}
              max={60}
            />
          </div>
          <div>
            <Switch
              checked={this.onSale}
              onChange={(e) => this.handleChange(e)}
              name="onSale"
              onChange={this.handleCheck}
              checked={this.state.checked}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Game on Sale
          </div>
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

advancedSearch.propTypes = {
  AdvancedSearch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  users: state.users,
});

const mapDispatchToProps = {
  AdvancedSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(advancedSearch);
