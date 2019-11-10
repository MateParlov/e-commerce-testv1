import React from 'react';
import styles from './CollectionItem.module.scss';
import PropTypes from 'prop-types';
//components imports
import CustomButton from '../../UI/CustomButton/CustomButton';
//redux imports
import { connect } from 'react-redux';
import { addItem } from './../../../redux/cart/cart.actions';
const CollectionItem = props => {
  const { item, addItem } = props;
  const { name, price, imageUrl } = item;

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

CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
