import React, { Component } from 'react';

import styles from './Directory.module.scss';
import { sections as sectionsItems } from './../../dbData/directoryData';
import MenuItem from '../MenuItem/MenuItem';
class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sectionsItems
    };
  }

  render() {
    const renderMenuItems = this.state.sections.map(
      ({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      }
    );
    return <div className={styles.directoryMenu}>{renderMenuItems}</div>;
  }
}

export default Directory;
