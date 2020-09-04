import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const UnAuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn === false ? <Redirect to="/login" /> : <Component {...props} />
    }
  />
);

UnAuthRoute.propTypes = {
  authenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(UnAuthRoute);
