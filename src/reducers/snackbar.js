import { snackbarConfig } from '../actions';

const snackbar = (state = snackbarConfig, action) => {
  switch (action.type) {
    case "SNACKBAR_SHOW":
      return {
        ...state,
        open: true,
        alertType: action.alertType,
        message: action.message
      };
    case "SNACKBAR_HIDE":
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};

export default snackbar;