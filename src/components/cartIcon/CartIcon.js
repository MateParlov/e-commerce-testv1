import React from 'react';

import { ReactComponent as ShoppingIcon } from './../../assets/shoppingBag.svg';

import styles from './CartIcon.module.scss';
import CartDropDown from '../cartDropdown/CartDropDown';

import { connect } from 'react-redux';
import { switchHiddenState } from './../../redux/cart/cart.actions';
import {
  cartShow,
  selectCartItemsCount
} from './../../redux/cart/cart.selectors';
const CartIcon = props => {
  const { cartItemsCount, cartHidden } = props;
  const showDropDown = cartHidden ? null : <CartDropDown />;
  /* const itemCount = cart.cartItems.reduce(
    (startN, item) => startN + item.quantity,
    0
  ); */

  return (
    <div className={styles.cartIcon}>
      <ShoppingIcon
        onClick={() => props.switchHiddenState()}
        className={styles.shoppingIcon}
      />
      <span className={styles.itemCount}>{cartItemsCount}</span>

      {showDropDown}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItemsCount: selectCartItemsCount(state),
    cartHidden: cartShow(state)
  };
};

const mapDispatchToProps = dispatch => ({
  switchHiddenState: () => dispatch(switchHiddenState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
