// actionType.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const REMOVE_CART = 'REMOVE_CART';
export const CANCEL_ITEM = 'CANCEL_ITEM'; // Add this line



export const incrementQuantity = (index) => ({
  type: INCREMENT_QUANTITY,
  payload: index
});

export const decrementQuantity = (index) => ({
  type: DECREMENT_QUANTITY,
  payload: index
});
export const removcart = (index) => ({
    type: REMOVE_CART,
    payload: index
  });