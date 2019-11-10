import React from 'react';
import styles from './Directory.module.scss';
import PropTypes from 'prop-types';
//components imports
import MenuItem from './MenuItem/MenuItem';
//redux imports
import { connect } from 'react-redux';
import { selectDirectoryData } from './../../redux/directory/directory.selectors';
const Directory = props => {
  const { sections } = props;
  const renderMenuItems = sections.map(({ id, ...otherSectionProps }) => {
    return <MenuItem key={id} {...otherSectionProps} />;
  });
  return <div className={styles.directoryMenu}>{renderMenuItems}</div>;
};

Directory.propTypes = {
  sections: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    sections: selectDirectoryData(state)
  };
};

export default connect(mapStateToProps)(Directory);
