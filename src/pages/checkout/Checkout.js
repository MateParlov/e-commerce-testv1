import React from 'react';
import styles from './Checkout.module.scss';
import PropTypes from 'prop-types';
//component imports
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import emptyCart from './../../assets/emptyCart.png';
//redux imports
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartItemsTotal
} from './../../redux/cart/cart.selectors';
import CheckoutPrice from '../../components/checkoutPrice/CheckoutPrice';

const Checkout = props => {
  const { cartItems, cartTotalPrice } = props;
  const renderCartItems = cartItems.map(item => {
    return <CheckoutItem item={item} key={item.id} />;
  });
  return (
    <div className={styles.Checkout}>
      {cartTotalPrice === 0 ? (
        <img className={styles.emptyCart} src={emptyCart} alt="empty cart" />
      ) : (
        <React.Fragment>
          <div className={styles.checkoutItemsBox}>{renderCartItems}</div>
          <CheckoutPrice totalPrice={cartTotalPrice} />
        </React.Fragment>
      )}
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
