import { createStore } from "redux";
import { rootReducer } from "./actions/rootReducer";
export const store = createStore(rootReducer);
