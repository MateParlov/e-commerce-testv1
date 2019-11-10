import React from 'react';
import styles from './HeaderLogo.module.scss';
import { Link } from 'react-router-dom';
//icon import
import LeafLogo from './../../../assets/logo/leafLogo.png';
const HeaderLogo = () => {
  return (
    <Link to="/" className={styles.logoContainer}>
      <img src={LeafLogo} className={styles.logo} alt="company logo" />
    </Link>
  );
};

export default HeaderLogo;
