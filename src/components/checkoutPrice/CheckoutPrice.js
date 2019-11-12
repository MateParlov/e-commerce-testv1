import React from "react";
import styles from "./CheckoutPrice.module.scss";
import PropTypes from "prop-types";
import StripeButton from "../UI/stripeButton/StripeButton";

const CheckoutPrice = props => {
  const { totalPrice } = props;

  return (
    <div className={styles.CheckoutPrice}>
      <span className={styles.title}>Total Price</span>
      <hr className={styles.separateLine}></hr>
      <span className={styles.price}>{totalPrice}$</span>
      <div className={styles.stripeBox}>
        <StripeButton price={totalPrice} />
      </div>
      <div>
        <h3 className={styles.stripeInfo}>
          *Please use the following test credit cart for payments*
        </h3>
        <h3 className={styles.stripeInfo}>
          4242 4242 4242 4242 - Exp:01/20 -CVV:123
        </h3>
      </div>
    </div>
  );
};

CheckoutPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired
};

export default CheckoutPrice;
