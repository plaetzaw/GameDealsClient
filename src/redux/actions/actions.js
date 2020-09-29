import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOGGED_IN,
  GET_FAVORITE_GAMES,
  LOADING_DATA,
  SEARCH_FOR_GAME_BY_TITLE,
  SEARCH_FOR_DEALS,
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
    .then((res) => {
      if (res.status === 200) {
        setAuthorizationHeader(res.data.accessToken);
        dispatch({ type: SET_AUTHENTICATED });
        let decodedToken = jwtDecode(res.data.token);
        dispatch({ type: LOGGED_IN, payload: decodedToken });
        dispatch({
          type: SNACKBAR_SUCCESS,
          payload: "You have been logged in",
        });
      } else {
        dispatch({
          type: SNACKBAR_ERROR,
          payload:
            "Your username and password were not correct. Please try again",
        });
      }
    });
};

// Logout
export const LogoutUser = () => (dispatch) => {
  console.log("Beginning logout process");
  localStorage.removeItem("JWToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  dispatch({ type: SNACKBAR_SUCCESS, payload: "User logged out" });
};

// Register
export const RegisterUser = (newUserData) => (dispatch) => {
  console.log("Beginning new user registration");
  axios
    .post("https://thegametracker.herokuapp.com/register", newUserData)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: SNACKBAR_SUCCESS,
          payload: "User registered! You may now login",
        });
      } else {
        dispatch({ type: SNACKBAR_ERROR, payload: "Error, please try again" });
      }
    });
};
// Get User Favorites
export const GetUserGames = (userID) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
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
      dispatch({ type: SNACKBAR_SUCCESS, payload: "Added item to favorites" });
    })
    .catch((err) => console.log(err));
};

// Get Full Game Info and Save to Favorites
export const QuickSaveToFavorites = (data) => (dispatch) =>
  axios.post("http://localhost:8080/getInfoAndSave", data).then((favorites) => {
    console.log(favorites);
    dispatch({ type: SET_GAME_TO_FAVORITES, payload: favorites.data });
    dispatch({ type: SNACKBAR_SUCCESS, payload: "Added item to favorites" });
  });

// Quick Search
export const QuickSearch = (title) => (dispatch) => {
  console.log("Finding game information");
  axios
    .post("http://localhost:8080/searchSingleResultTitle", title)
    .then((searchedGames) => {
      console.log(searchedGames);
      dispatch({ type: SEARCH_FOR_DEALS, payload: searchedGames.data });
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
      dispatch({
        type: SNACKBAR_SUCCESS,
        payload: "Removed item from favorites",
      });
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
      } else {
        dispatch({
          type: SNACKBAR_ERROR,
          payload: "ERROR, Please Try Again!",
        });
      }
    });
};

//Update Email
export const UpdateEmail = (email) => (dispatch) => {
  console.log(email);
  axios
    .post("https://thegametracker.herokuapp.com/updateEmail", email)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: SNACKBAR_SUCCESS,
          payload: "Email Successfully Updated!",
        });
      } else {
        dispatch({
          type: SNACKBAR_ERROR,
          payload: "ERROR, Please Try Again!",
        });
      }
    });
};

//Update Password
export const UpdatePassword = (password) => (dispatch) => {
  axios
    .post("https://thegametracker.herokuapp.com/updatePassword", password)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: SNACKBAR_SUCCESS,
          payload: "Password Successfully Updated!",
        });
      } else {
        dispatch({
          type: SNACKBAR_ERROR,
          payload: "ERROR, Please Try Again!",
        });
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
export const SetAlert = (data) => (dispatch) => {
  console.log(data);
  console.log("Setting alert");
  axios
    .post("https://thegametracker.herokuapp.com/setAlert", data)
    .then((res) => {
      if (res.status === 200) {
        console.log(
          dispatch({
            type: SNACKBAR_SUCCESS,
            payload: `Alert set ${data.title} to ${data.email} for $${data.price}`,
          })
        );
      } else {
        dispatch({
          type: SNACKBAR_ERROR,
          payload: "Alert not set, please try again",
        });
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
