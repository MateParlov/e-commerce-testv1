import React from 'react';
import styles from './CartDropDown.module.scss';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
//components imports
import CustomButton from '../../UI/CustomButton/CustomButton';
import CartItem from '../cartItem/CartItem';
//redux imports
import { connect } from 'react-redux';
import { switchHiddenState } from './../../../redux/cart/cart.actions';
import { selectCartItems } from './../../../redux/cart/cart.selectors';
const CartDropDown = props => {
  const { cartItems, switchHiddenState, history } = props;

  const cartItemsRender = cartItems.length ? (
    cartItems.map(item => {
      return <CartItem item={item} key={item.id} />;
    })
  ) : (
    <span>Your cart is empty</span>
  );

  const handleCheckoutButton = () => {
    switchHiddenState();
    history.push('/checkout');
  };

  return (
    <div className={styles.CartDropDown}>
      <div className={styles.cartItems}>{cartItemsRender}</div>
      <CustomButton onClick={handleCheckoutButton}>Go to Checkout</CustomButton>
    </div>
  );
};

CartDropDown.propTypes = {
  cartItems: PropTypes.array,
  switchHiddenState: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  };
};
const mapDispatchToProps = dispatch => ({
  switchHiddenState: () => dispatch(switchHiddenState())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropDown)
);
