import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import PropTypes from 'prop-types';
import { auth } from './../../../firebaseConfig/firebase.utils';
import CartIcon from '../../cart/cartIcon/CartIcon';

const Navbar = ({ currentUser }) => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className={styles.Navbar}>
      <Link className={styles.option} to="/shop">
        SHOP
      </Link>
      <Link className={styles.option} to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <span className={styles.option} onClick={handleSignOut}>
          SIGN OUT
        </span>
      ) : (
        <Link to="/signin" className={styles.option}>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
  );
};

Navbar.propTypes = {
  currentUser: PropTypes.object
};

export default Navbar;
