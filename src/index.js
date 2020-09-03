//React
import React from "react";
import ReactDOM from "react-dom";

//Layout
import UI from "./components/Layout/UI";

//Pages
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

//Routing
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Redux
import { Provider } from "react-redux";

//Store
import store from "./redux/store";

//Authentication

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UI />
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
