import { combineReducers } from "redux";
import { authSlice } from "../authSlice";
import { toDoSlice } from "../toDoSlice";


export const rootReducer = combineReducers({
   [toDoSlice.name]: toDoSlice.reducer,
   [authSlice.name]: authSlice.reducer,
})