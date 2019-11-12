import React from "react";
import styles from "./CartIcon.module.scss";
import PropTypes from "prop-types";
//components imports
import CartDropDown from "../cartDropdown/CartDropDown";
import { ReactComponent as ShoppingIcon } from "./../../../assets/shoppingBag.svg";
//redux imports
import { connect } from "react-redux";
import { switchHiddenState } from "./../../../redux/cart/cart.actions";
import {
  cartShow,
  selectCartItemsCount
} from "../../../redux/cart/cart.selectors";

const CartIcon = props => {
  const { cartItemsCount, cartHidden } = props;
  const showDropDown = cartHidden ? null : <CartDropDown />;

  return (
    <div className={styles.cartIcon}>
      <div
        className={styles.shoppingIconBox}
        onClick={() => props.switchHiddenState()}
      >
        <ShoppingIcon className={styles.shoppingIcon} />
        <span className={styles.itemCount}>{cartItemsCount}</span>
      </div>

      {showDropDown}
    </div>
  );
};

CartIcon.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
  cartHidden: PropTypes.bool.isRequired,
  switchHiddenState: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    cartItemsCount: selectCartItemsCount(state),
    cartHidden: cartShow(state)
  };
};

const mapDispatchToProps = dispatch => ({
  switchHiddenState: () => dispatch(switchHiddenState())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
