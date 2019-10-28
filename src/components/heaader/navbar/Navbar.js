import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
const Navbar = props => {
  return (
    <div className={styles.Navbar}>
      <Link className={styles.option} to="/shop">
        SHOP
      </Link>
      <Link className={styles.option} to="/shop">
        CONTACT
      </Link>
      <Link className={styles.option} to="/shop">
        SIGN IN
      </Link>
    </div>
  );
};

export default Navbar;
