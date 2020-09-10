import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOGGED_IN,
  GET_FAVORITE_GAMES,
  LOADING_DATA,
  SEARCH_FOR_GAME_BY_TITLE,
  SET_GAME_TO_FAVORITES,
} from "./actionTypes";

// Set JWT Token
export const setAuthorizationHeader = (token) => {
  const JWToken = `Bearer ${token}`;
  localStorage.setItem("JWToken", JWToken);
  axios.defaults.headers.common["Authorization"] = JWToken;
};

// Login
export const LoginUser = (userData) => (dispatch) => {
  console.log("Beginning login process");
  axios.post("http://localhost:8080/login", userData).then((results) => {
    setAuthorizationHeader(results.data.accessToken);
    dispatch({ type: SET_AUTHENTICATED });
    let decodedToken = jwtDecode(results.data.token);
    console.log(decodedToken);
    dispatch({ type: LOGGED_IN, payload: decodedToken });
  });
};

// Logout
export const LogoutUser = () => (dispatch) => {
  console.log("Beginning logout process");
  localStorage.removeItem("JWToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

// Register
export const RegisterUser = (newUserData) => () => {
  console.log("Beginning new user registration");
  axios.post("http://localhost:8080/register", newUserData).then((res) => {
    if (res.status === 200) {
      console.log("Registration Successful");
    } else {
      console.log("Registration Failed. Please try again");
    }
  });
};
// Get User Favorites
export const GetUserGames = (userID) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  console.log("Retrieving user favorites");
  console.log(userID);
  console.log(typeof userID);
  axios
    .post("http://localhost:8080/viewSavedGames", userID)
    .then((favorites) => {
      dispatch({ type: GET_FAVORITE_GAMES, payload: favorites.data });
    })
    .catch((err) => console.log(err));
};

// Search for Games by Title
export const GetGamesByTitle = (gameTitle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  console.log("Searching for games by title");
  axios
    .post("http://localhost:8080/searchTitle", gameTitle)
    .then((searchedGames) => {
      console.log(searchedGames);
      dispatch({ type: SEARCH_FOR_GAME_BY_TITLE, payload: searchedGames.data });
    })
    .catch((err) => console.log(err));
};

// Submit Game to Favorites
export const SubmitToFavorites = (gameObj) => (dispatch) => {
  console.log("Submitting game to favorites database");
  axios
    .post("http://localhost:8080/createGameEntry", gameObj)
    .then((favorites) => {
      console.log(favorites);
      dispatch({ type: SET_GAME_TO_FAVORITES, payload: favorites.data });
    })
    .catch((err) => console.log(err));
};
