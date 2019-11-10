import React from 'react';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';
//components imports
import HeaderLogo from './HeaderLogo/HeaderLogo';
import Navbar from './navbar/Navbar';
//redux imports
import { connect } from 'react-redux';
import { selectCurrentUser } from './../../redux/user/user.selectors';
const Header = props => {
  const { currentUser } = props;

  return (
    <div className={styles.Header}>
      <HeaderLogo />
      <Navbar currentUser={currentUser} />
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(Header);
