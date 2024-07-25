// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './reducer';
// Import other reducers if you have them

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here
  
  
});
// console.log(rootReducer)

export default rootReducer;
