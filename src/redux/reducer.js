// reducer.js
import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CANCEL_ITEM } from './actionType';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload) {
            return { ...item, Quantity: item.Quantity + 1 };
          }
          return item;
        })
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload && item.Quantity > 1) {
            return { ...item, Quantity: item.Quantity - 1 };
          }
          return item;
        })
      };
      case CANCEL_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
      
    default:
      return state;
  }
};

export default cartReducer;
