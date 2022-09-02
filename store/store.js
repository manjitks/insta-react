// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// //import  thunk from 'redux-thunk';

// import { persistStore} from 'redux-persist'

// import rootReducer from './rootReducer';

// const middlewares = [logger];

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// //export const  persistor = persistStore(store)

// //export default {store,persistor};
// export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer/rootReducer";
import logger from "redux-logger";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk, logger];

// creating store
export const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
