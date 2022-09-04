import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer/rootReducer";
import logger from "redux-logger";
const { persistStore, persistReducer } = require("redux-persist");
import storage from "redux-persist/lib/storage";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk, logger];

const persistConfig = {
  key: "nextjs",
  whitelist: ["modal", "auth"], // only counter will be persisted, add other reducers if needed
  storage, // if needed, use a safer storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating store
export const store = createStore(
  persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.__persistor = persistStore(store);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
