import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filtering from "./filtering";
import bookmarking from "./bookmarking";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["filtering", "bookmarking"],
};

const rootReducer = combineReducers({ filtering, bookmarking });

export default persistReducer(persistConfig, rootReducer);
