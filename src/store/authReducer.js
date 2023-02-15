import { LOG_IN, LOG_OUT } from "./actions";

const initialState = {
  email: "",
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        email: action.payload,
        isAuthorized: true,
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};
