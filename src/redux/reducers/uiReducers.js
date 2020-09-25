const {
  SNACKBAR_SUCCESS,
  SNACKBAR_ERROR,
  SNACKBAR_CLEAR,
} = require("../actions/actionTypes");

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case SNACKBAR_SUCCESS:
      return {
        ...state,
        successSnackbarOpen: true,
        successSnackbarMessage: action.payload,
      };
    case SNACKBAR_ERROR:
      return {
        ...state,
        errorSnackbarOpen: true,
        errorSnackbarMessage: action.payload,
      };
    case SNACKBAR_CLEAR:
      return {
        ...state,
        successSnackbarOpen: false,
        errorSnackbarOpen: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
