import React, { Component } from "react";
import { layoutGenerator } from "react-break";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { QuickSearch } from "../../redux/actions/actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import { Link, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class UIFooter extends Component {
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
    const gameInfo = {
      gameTitle: this.state.title,
    };
    console.log(gameInfo);
    this.props.QuickSearch(gameInfo);
    //redirected to QuickSearch  page
  };
  render() {
    const layout = layoutGenerator({
      mobile: 0,
      phablet: 550,
      tablet: 768,
      desktop: 992,
    });

    const OnMobile = layout.is("mobile");

    return (
      <OnMobile>
        <BottomNavigation showlabel="">
          <div
            style={{
              border: "royalblue 2px solid",
              backgroundColor: "#6bb8ff",
              height: "3rem",
              position: "sticky",
              justifyContent: "right",
              dispaly: "flex",
              alignItems: "normal",
              bottom: 0,
              width: "100%",
            }}
          >
            <form>
              <TextField
                style={{ height: "3 rem", width: "80%" }}
                name="title"
                variant="outlined"
                placeholder="QuickSearch for a game"
                onChange={(e) => this.handleChange(e)}
              />
              <Button
                style={{ height: "3rem", width: "20%" }}
                variant="contained"
                color="default"
                startIcon={<SearchIcon />}
                onClick={this.onSearch}
              ></Button>
            </form>
          </div>
        </BottomNavigation>
      </OnMobile>
    );
  }
}

UIFooter.propTypes = {
  QuickSearch: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(UIFooter);
