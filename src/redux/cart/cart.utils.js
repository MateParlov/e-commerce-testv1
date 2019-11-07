export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);
  if (existingCartItem.quantity === 1) {
    const updatedCartItems = deleteItemFromCart(cartItems, item.id);
    return updatedCartItems;
  } else {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      } else {
        return cartItem;
      }
    });
    return updatedCartItems;
  }
};

export const deleteItemFromCart = (cartItems, itemId) => {
  const newCartItems = cartItems.filter(item => item.id !== itemId);

  return newCartItems;
};
