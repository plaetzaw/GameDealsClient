import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOGGED_IN,
  GET_FAVORITE_GAMES,
  LOADING_DATA,
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
  axios
    .post("http://localhost8080/viewSavedGames", userID)
    .then((favorites) => {
      dispatch({ type: GET_FAVORITE_GAMES, payload: favorites.data });
    })
    .catch((err) => console.log(err));
};
