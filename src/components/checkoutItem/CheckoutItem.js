import React from 'react';

import styles from './CheckoutItem.module.scss';
import leftArrow from './../../assets/arrowIcons/left-arrow.png';
import rightArrow from './../../assets/arrowIcons/right-arrow.png';
import { connect } from 'react-redux';
import {
  deleteItem,
  removeItem,
  addItem
} from './../../redux/cart/cart.actions';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
const CheckoutItem = props => {
  const { quantity, imageUrl, name, price, id } = props.item;

  const handleDeleteItem = () => {
    console.log(id);
    props.deleteItem(id);
  };
  const handleRemoveItem = () => {
    props.removeItem(props.item);
  };
  const handleAddItem = () => {
    props.addItem(props.item);
  };

  return (
    <div className={styles.CheckoutItem}>
      <div className={styles.imgBox}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.detailsBox}>
        <span>{name}</span>
        <span>
          Coll blue jacket with all shit that is relevant about winter and
          automn
        </span>
        <div className={styles.quantityBox}>
          <img
            src={leftArrow}
            onClick={handleRemoveItem}
            className={styles.arrow}
            alt="remove item"
          />{' '}
          {quantity}
          <img
            src={rightArrow}
            onClick={handleAddItem}
            className={styles.arrow}
            alt="add item "
          />
        </div>
        <CustomButton
          onClick={handleDeleteItem}
          buttonType="delete"
          customClass={styles.deleteButton}
        >
          Remove
        </CustomButton>
      </div>
      <div className={styles.priceBox}>
        <span>PRICE:</span>
        <div>
          {quantity} x {price}$
        </div>
        <span>{quantity * price} $</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: itemId => dispatch(deleteItem(itemId)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
