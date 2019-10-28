import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { auth } from './../../../firebaseConfig/firebase.utils';
const Navbar = props => {
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
      {props.currentUser ? (
        <Link className={styles.option} onClick={handleSignOut}>
          SIGN OUT
        </Link>
      ) : (
        <Link to="/signin" className={styles.option}>
          SIGN IN
        </Link>
      )}
    </div>
  );
};

export default Navbar;
