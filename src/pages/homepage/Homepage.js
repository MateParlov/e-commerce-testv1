import React from 'react';
import styles from './Homepage.module.scss';
import Directory from '../../components/directory/Directory';
import HeroSection from '../../components/heroSection/HeroSection';
const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HeroSection />
      <Directory />
    </div>
  );
};

export default Homepage;
