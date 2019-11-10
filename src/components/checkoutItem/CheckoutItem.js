import React from 'react';
import styles from './CheckoutItem.module.scss';
import PropTypes from 'prop-types';
//icon and components imports
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import leftArrow from './../../assets/arrowIcons/left-arrow.png';
import rightArrow from './../../assets/arrowIcons/right-arrow.png';
//redux imports
import { connect } from 'react-redux';
import {
  deleteItem,
  removeItem,
  addItem
} from './../../redux/cart/cart.actions';

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

CheckoutItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
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
