const {
  GET_FAVORITE_GAMES,
  SET_GAME_TO_FAVORITES,
  DELETE_GAME_FROM_FAVORITES,
  SEARCH_FOR_GAME_BY_TITLE,
  SEARCH_FOR_DEALS,
} = require("../actions/actionTypes");

const initialState = {
  loadingData: true,
  searchedData: false,
  searchedGames: [],
  favorites: [],
  uploads: [],
};

const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_GAMES:
      return {
        ...state,
        loadingData: false,
        favorites: action.payload,
      };
    case SET_GAME_TO_FAVORITES:
      return {
        ...state,
        uploads: action.payload,
      };
    case DELETE_GAME_FROM_FAVORITES:
      return {
        ...state,
      };
    case SEARCH_FOR_GAME_BY_TITLE:
      return {
        ...state,
        searchedGames: action.payload,
        searchedData: true,
      };
    case SEARCH_FOR_DEALS:
      return {
        ...state,
        searchedGames: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducers;
