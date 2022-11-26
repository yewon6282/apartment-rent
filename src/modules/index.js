import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filtering from "./filtering";
import bookmarking from "./bookmarking";
import logging from "./logging";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["logging", "filtering", "bookmarking"],
};

const rootReducer = combineReducers({ logging, filtering, bookmarking });

export default persistReducer(persistConfig, rootReducer);
