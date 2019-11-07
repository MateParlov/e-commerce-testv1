import React from 'react';
import styles from './CartItem.module.scss';
const CartItem = props => {
  const { imageUrl, price, name, quantity } = props.item;

  return (
    <div className={styles.CartItem}>
      <img src={imageUrl} alt={name}></img>
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
