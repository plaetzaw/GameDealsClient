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
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class advancedSearch extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      value: 30,
      checked: false,
      sort: 1,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSlide = (name) => (e, value) => {
    this.setState({
      [name]: value,
    });
    console.log(this.state.value);
  };

  handleSelect = (name) => (e, value) => {
    this.setState({
      [name]: value,
    });
    console.log(this.state.value);
  };

  handleCheck = () => {
    this.setState((state) => ({
      checked: !state.checked,
    }));
  };

  handleSort = (event) => {
    this.setState({ name: event.target.name, sort: event.target.value });
  };

  onSearch = (e) => {
    e.preventDefault();
    const gameInfo = {
      gameTitle: this.state.title,
      value: this.state.value,
      checked: this.state.checked,
      sort: this.state.sort,
    };
    console.log(gameInfo);
    this.props.AdvancedSearch(gameInfo);
  };

  render() {
    //Display current value
    function valuetext(value) {
      return `${value}`;
    }

    const { value } = this.state;

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
      <>
        <div
          style={{
            backgroundColor: "rgba(150, 202, 250, .25)",
            // border: "#BE9EFF 1px solid",
            padding: "1rem",
            // borderRadius: "1px",
            // marginTop: "1px",
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form>
            <h1>Game Search</h1>

            <TextField
              name="title"
              variant="outlined"
              placeholder="Game Title"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <div style={{ width: "45vh" }}>
              <Typography id="discrete-slider-always" gutterBottom>
                Select Maximum Price
              </Typography>
              <br />
              <br />
              <Slider
                name="value"
                defaultValue={60}
                getAriaValueText={valuetext}
                onChange={this.handleSlide("value")}
                aria-labelledby="discrete-slider-always"
                step={5}
                marks={marks}
                valueLabelDisplay="on"
                value={value}
                min={0}
                max={60}
              />
            </div>
            <br />
            <div>
              <Switch
                checked={this.state.checked}
                name="onSale"
                onChange={this.handleCheck}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Select for games currently on discount
            </div>
            <br />
            <div>
              <FormControl style={{ margin: "25px", minWidth: "120px" }}>
                <InputLabel id="selector">Sort Results By</InputLabel>
                <Select value={this.state.sort} onChange={this.handleSort}>
                  <MenuItem name="sort" value={1}>
                    Price
                  </MenuItem>
                  <MenuItem name="sort" value={2}>
                    Game Title
                  </MenuItem>
                  <MenuItem name="sort" value={3}>
                    Savings
                  </MenuItem>
                  <MenuItem name="sort" value={4}>
                    Deal Rating
                  </MenuItem>
                  <MenuItem name="sort" value={5}>
                    Store
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <br />
            <Button
              variant="contained"
              color="default"
              startIcon={<SearchIcon />}
              onClick={this.onSearch}
            >
              Search!
            </Button>
          </form>
        </div>
        <div
          style={{
            paddingBottom: "1px",
            backgroundColor: "rgba(150, 202, 250, .25)",
          }}
        >
          {/* <h1>Search Titles</h1> */}

          <Grid
            container
            spacing={3}
            // direction="columm"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              direction="row"
              alignContent={"space-around"}
              justify={"center"}
              xs={12}
              md={3}
              lg={3}
              xl={3}
              wrap={"wrap"}
            >
              {searchCard}
            </Grid>
          </Grid>
        </div>
      </>
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
