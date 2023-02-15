import { combineReducers } from "redux";
import { authReducer } from "../authReducer";
import { toDoReducer } from "../toDoReducer";

export const rootReducer = combineReducers({
    todo: toDoReducer,
    auth: authReducer,
})