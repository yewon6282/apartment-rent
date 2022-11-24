import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./modules";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const store = createStore(rootReducer);
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
