import actionTypes from './cart.types';
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_HIDDEN_STATE:
      return {
        ...state,
        hidden: !state.hidden
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
