import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducers from "./reducers/userReducers";
import dataReducers from "./reducers/dataReducers";

const middlewareCompose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  users: userReducers,
  data: dataReducers,
});

const store = createStore(
  reducers,
  initialState,
  middlewareCompose(applyMiddleware(...middleware))
);

export default store;
