import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderLogo.module.scss';
import { ReactComponent as Logo } from './../../../assets/logo/crown.svg';
const HeaderLogo = props => {
  return (
    <Link to="/" className={styles.logoContainer}>
      <Logo className={styles.logo}></Logo>
    </Link>
  );
};

export default HeaderLogo;
