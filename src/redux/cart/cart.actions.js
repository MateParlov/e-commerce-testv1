import actionTypes from './cart.types';

const switchHiddenState = () => ({
  type: actionTypes.SWITCH_HIDDEN_STATE
});

const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
});
const removeItem = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});
const deleteItem = itemId => ({
  type: actionTypes.DELETE_ITEM,
  payload: itemId
});
export { switchHiddenState, addItem, deleteItem, removeItem };
