import React from 'react';

import styles from './Directory.module.scss';
import MenuItem from './MenuItem/MenuItem';

import { connect } from 'react-redux';
import { selectDirectoryData } from './../../redux/directory/directory.selectors';
const Directory = props => {
  const { sections } = props;
  const renderMenuItems = sections.map(({ id, ...otherSectionProps }) => {
    return <MenuItem key={id} {...otherSectionProps} />;
  });
  return <div className={styles.directoryMenu}>{renderMenuItems}</div>;
};

const mapStateToProps = state => {
  return {
    sections: selectDirectoryData(state)
  };
};

export default connect(mapStateToProps)(Directory);
