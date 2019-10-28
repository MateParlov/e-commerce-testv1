import React, { Component } from 'react';
import DISPLAY_ITEMS from './../../dbData/heroSectionItems';
import styles from './HeroSection.module.scss';
import CustomButton from '../UI/CustomButton/CustomButton';

class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: DISPLAY_ITEMS
    };
  }

  render() {
    return (
      <div className={styles.HeroSection}>
        <div className={styles.contentSection}>
          <div>
            <h1 className={styles.title}>{this.state.items[0].title}</h1>
            <p className={styles.description}>
              {this.state.items[0].description}
            </p>
          </div>
          <div className={styles.callToActionButtons}>
            <CustomButton>SHOP NOW</CustomButton>
            <CustomButton>SHOP ALL</CustomButton>
          </div>
        </div>
        <div className={styles.imageSection}>
          <div
            style={{
              backgroundImage: `url('https://i.imgur.com/aPtZmbW.png')`
            }}
            className={styles.heroImage}
          ></div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
