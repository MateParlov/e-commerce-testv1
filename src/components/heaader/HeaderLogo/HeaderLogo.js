import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderLogo.module.scss';
import LeafLogo from './../../../assets/logo/leafLogo.png';
const HeaderLogo = props => {
  return (
    <Link to="/" className={styles.logoContainer}>
      <img src={LeafLogo} className={styles.logo} />
    </Link>
  );
};

export default HeaderLogo;
