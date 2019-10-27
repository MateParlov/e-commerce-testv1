import React from 'react';
import styles from './Homepage.module.scss';
import Directory from '../../components/directory/Directory';
const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
};

export default Homepage;
