import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import modalReducer from "./modal/modalReducer";
//import storage from 'redux-persist/lib/storage'
//import { persistReducer} from 'redux-persist'

import userReducer from "./user/user.reducer";

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist:['auth']
// }

const rootReducer = combineReducers({
  shop: userReducer,
  modal: modalReducer,
  auth: authReducer,
});
export default rootReducer;
//export default persistReducer(persistConfig,rootReducer)
