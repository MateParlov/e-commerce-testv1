import React from 'react';
import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import Navbar from './navbar/Navbar';
import { connect } from 'react-redux';
import { selectCurrentUser } from './../../redux/user/user.selectors';
const Header = props => {
  const { currentUser } = props;
  console.log(currentUser);
  return (
    <div className={styles.Header}>
      <HeaderLogo />
      <Navbar currentUser={currentUser} />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(Header);
