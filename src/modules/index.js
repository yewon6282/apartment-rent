import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import realEstateFiltering from "./realEstateFiltering";
import regionFiltering from "./regionFiltering";
import bookmarking from "./bookmarking";
import logging from "./logging";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["logging", "realEstateFiltering", "regionFiltering", "bookmarking"],
};

const rootReducer = combineReducers({ logging, realEstateFiltering, regionFiltering, bookmarking });

export default persistReducer(persistConfig, rootReducer);
