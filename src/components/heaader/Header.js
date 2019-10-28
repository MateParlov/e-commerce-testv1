import React from 'react';
import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import Navbar from './navbar/Navbar';

const Header = props => {
  const { currentUser } = props;
  return (
    <div className={styles.Header}>
      <HeaderLogo />
      <Navbar currentUser={currentUser} />
    </div>
  );
};

export default Header;
