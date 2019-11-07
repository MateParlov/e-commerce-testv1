import React from 'react';
import styles from './CollectionItem.module.scss';
import CustomButton from '../UI/CustomButton/CustomButton';

import { connect } from 'react-redux';
import { addItem } from './../../redux/cart/cart.actions';
const CollectionItem = props => {
  const { item, addItem } = props;
  const { name, price, imageUrl } = props.item;

  const handleClick = item => {
    addItem(item);
  };

  return (
    <div className={styles.CollectionItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={styles.CollectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <CustomButton
        customClass={styles.customButton}
        onClick={handleClick.bind(this, item)}
        buttonType="inverted"
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
