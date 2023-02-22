import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  isAuthorized: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin(state, action) {
      state.email = action.payload;
      state.isAuthorized = true;
    },
    authLogout() {
      return initialState;
    },
  },
});
// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOG_IN:
//       return {
//         ...state,
//         email: action.payload,
//         isAuthorized: true,
//       };
//     case LOG_OUT:
//       return initialState;
//     default:
//       return state;
//   }
// };
