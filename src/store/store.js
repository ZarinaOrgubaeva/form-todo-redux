import { createStore } from "redux";
import { rootReducer } from "./actions/rootSlice";
export const store = createStore(rootReducer);
