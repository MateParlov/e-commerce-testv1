import React from 'react';

import styles from './Checkout.module.scss';

import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartItemsTotal
} from './../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';

const Checkout = props => {
  const { cartItems, cartTotalPrice } = props;
  const renderCartItems = cartItems.map(item => {
    return <CheckoutItem item={item} key={item.id} />;
  });
  return (
    <div className={styles.Checkout}>
      <div className={styles.checkoutItemsBox}>{renderCartItems}</div>
      <div>Total Price: {cartTotalPrice}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state),
    cartTotalPrice: selectCartItemsTotal(state)
  };
};

export default connect(mapStateToProps)(Checkout);
