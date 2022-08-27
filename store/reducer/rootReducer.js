import { combineReducers } from 'redux';
import sampleReducer from './sample/sampleReducer';
//import storage from 'redux-persist/lib/storage'
//import { persistReducer} from 'redux-persist'


import userReducer from './user/user.reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist:['auth']
// }

const rootReducer =  combineReducers({
  shop: userReducer,
  sampleData: sampleReducer
});
export default rootReducer;
//export default persistReducer(persistConfig,rootReducer)