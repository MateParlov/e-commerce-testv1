import React from 'react';
import styles from './CheckoutPrice.module.scss';
import PropTypes from 'prop-types';

const CheckoutPrice = props => {
  const { totalPrice } = props;

  return (
    <div className={styles.CheckoutPrice}>
      <span className={styles.title}>Total Price</span>
      <hr className={styles.separateLine}></hr>
      <span className={styles.price}>{totalPrice}$</span>
    </div>
  );
};

CheckoutPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired
};

export default CheckoutPrice;
