import React from 'react';
import styles from './CartDropDown.module.scss';
import CustomButton from '../../UI/CustomButton/CustomButton';
import CartItem from '../cartItem/CartItem';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchHiddenState } from './../../../redux/cart/cart.actions';
import { selectCartItems } from './../../../redux/cart/cart.selectors';
const CartDropDown = props => {
  const { cartItems } = props;

  const cartItemsRender = cartItems.length ? (
    cartItems.map(item => {
      return <CartItem item={item} />;
    })
  ) : (
    <span>Your cart is empty</span>
  );

  const handleCheckoutButton = () => {
    props.toggleCartHidden();
    props.history.push('/checkout');
  };
  return (
    <div className={styles.CartDropDown}>
      <div className={styles.cartItems}>{cartItemsRender}</div>
      <CustomButton onClick={handleCheckoutButton}>Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(switchHiddenState())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropDown)
);
