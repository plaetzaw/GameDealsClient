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
  DELETE_GAME_FROM_FAVORITES,
  SNACKBAR_SUCCESS,
  SNACKBAR_ERROR,
  SNACKBAR_CLEAR,
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
  axios
    .post("https://thegametracker.herokuapp.com/login", userData)
    .then((results) => {
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
  axios
    .post("https://thegametracker.herokuapp.com/register", newUserData)
    .then((res) => {
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
    .post("https://thegametracker.herokuapp.com/viewSavedGames", userID)
    .then((favorites) => {
      let favoriteData = favorites.data.reverse();
      dispatch({ type: GET_FAVORITE_GAMES, payload: favoriteData });
    })
    .catch((err) => console.log(err));
};

// Search for Games by Title
export const GetGamesByTitle = (gameTitle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  console.log("Searching for games by title");
  axios
    .post("https://thegametracker.herokuapp.com/searchTitle", gameTitle)
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
    .post("https://thegametracker.herokuapp.com/createGameEntry", gameObj)
    .then((favorites) => {
      console.log(favorites);
      dispatch({ type: SET_GAME_TO_FAVORITES, payload: favorites.data });
    })
    .catch((err) => console.log(err));
};

// Delete Game from Favorites (and calls the updated Favorites)
export const DeleteFromFavorites = (data) => (dispatch) => {
  console.log(data);
  let id = { id: data.id };
  let userID = { userID: data.userID };
  console.log("Deleting item from favorites");
  axios
    .post("https://thegametracker.herokuapp.com/deleteFavorite", id)
    .then(() => {
      dispatch({ type: DELETE_GAME_FROM_FAVORITES });
      axios
        .post("https://thegametracker.herokuapp.com/viewSavedGames", userID)
        .then((favorites) => {
          dispatch({ type: GET_FAVORITE_GAMES, payload: favorites.data });
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

//Update Username
export const UpdateUsername = (username) => (dispatch) => {
  console.log(username);
  axios
    .post("https://thegametracker.herokuapp.com/updateUsername", username)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: SNACKBAR_SUCCESS,
          payload: "Username Successfully Updated!",
        });
        console.log("Update Successful");
      } else {
        console.log("Update Failed. Please try again");
      }
    });
};

//Update Email
export const UpdateEmail = (email) => () => {
  console.log(email);
  axios
    .post("https://thegametracker.herokuapp.com/updateEmail", email)
    .then((res) => {
      if (res.status === 200) {
        console.log("Update Successful");
      } else {
        console.log("Update Failed. Please try again");
      }
    });
};

//Update Password
export const UpdatePassword = (password) => () => {
  axios
    .post("https://thegametracker.herokuapp.com/updatePassword", password)
    .then((res) => {
      if (res.status === 200) {
        console.log("Update Successful");
      } else {
        console.log("Update Failed. Please try again");
      }
    });
};

//Advanced Search
export const AdvancedSearch = (data) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  console.log("Searching for games by title");
  axios
    .post("https://thegametracker.herokuapp.com/advancedSearch", data)
    .then((searchedGames) => {
      console.log(searchedGames);
      dispatch({ type: SEARCH_FOR_GAME_BY_TITLE, payload: searchedGames.data });
    })
    .catch((err) => console.log(err));
};

//Set Alert
export const SetAlert = (data) => () => {
  console.log(data);
  console.log("Setting alert");
  axios
    .post("https://thegametracker.herokuapp.com/setAlert", data)
    .then((res) => {
      if (res.status === 200) {
        console.log(
          `Alert set ${data.gameID} to ${data.email} for ${data.price}`
        );
      } else {
        console.log("Alert not set, please try again");
      }
    });
};

//SnackbarSuccess
export const SnackbarSuccess = (message) => (dispatch) => {
  dispatch({ type: SNACKBAR_SUCCESS, payload: message.data });
};

//SnackbarError
export const SnackbarError = (message) => (dispatch) => {
  dispatch({ type: SNACKBAR_ERROR, payload: message.data });
};

//SnackbarClear
export const SnackbarClear = (dispatch) => {
  dispatch({ type: SNACKBAR_CLEAR });
};
