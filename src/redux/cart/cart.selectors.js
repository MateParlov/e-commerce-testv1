import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const cartShow = createSelector(
  [selectCart],
  cartShow => cartShow.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((start, item) => start + item.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartTotal =>
    cartTotal.reduce((start, item) => {
      return start + item.price * item.quantity;
    }, 0)
);
