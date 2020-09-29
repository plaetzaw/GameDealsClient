//React
import React from "react";
import ReactDOM from "react-dom";

//Layout
import UI from "./components/Layout/UI";
import UIFooter from "./components/Layout/UIFooter"; //Only used on Mobile

//Pages
import Favorites from "./pages/favorites";
import Login from "./pages/login";
import Register from "./pages/register";
import Settings from "./pages/settings";
import advancedSearch from "./components/advanceSearch";
import QuickSearch from "./components/gameSearch";
// import test from "./components/test";
import breakpointtest from "./components/breakpointtest";

//Snackbars
import SnackbarSuccess from "./components/successSnackbar";
import SnackbarError from "./components/errorSnackbar";

//Routing
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Redux
import { Provider } from "react-redux";

//Store
import store from "./redux/store";

//Authentication
import AuthRoute from "./utility/AuthRoute";
import ProtectedRoute from "./utility/ProtectedRoute";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UI />
      <SnackbarSuccess />
      <SnackbarError />
      <Switch>
        <AuthRoute exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        <ProtectedRoute exact path="/search" component={advancedSearch} />
        <ProtectedRoute exact path="/Favorites" component={Favorites} />
        <ProtectedRoute exact path="/Settings" component={Settings} />
        <Route exact path="/QuickSearch" component={QuickSearch} />
        <Route exact path="/test" component={breakpointtest} />
      </Switch>
      <UIFooter />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
