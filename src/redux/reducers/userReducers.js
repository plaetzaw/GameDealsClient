const {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOGGED_IN,
  LOADING_USER,
} = require("../actions/actionTypes");

const initialState = {
  loggedIn: false,
  authenticated: false,
  credentials: [],
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
        credentials: action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userReducers;
