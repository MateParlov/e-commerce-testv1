import React from 'react';
import styles from './Checkout.module.scss';
import PropTypes from 'prop-types';
//component imports
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
//redux imports
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartItemsTotal
} from './../../redux/cart/cart.selectors';

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

Checkout.propTypes = {
  cartItems: PropTypes.array.isRequired,
  cartTotalPrice: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state),
    cartTotalPrice: selectCartItemsTotal(state)
  };
};

export default connect(mapStateToProps)(Checkout);
