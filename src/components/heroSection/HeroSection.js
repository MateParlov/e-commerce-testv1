import React from 'react';
import styles from './HeroSection.module.scss';
import PropTypes from 'prop-types';
//components and icons imports
import HeroProductDisplay from './heroProductDisplay/HeroProductDisplay';
import leftArrow from './../../assets/heroSectionIcons/leftIcon.png';
import rightArrow from './../../assets/heroSectionIcons/rightIcon.png';
//REDUX
import { connect } from 'react-redux';
import { changeItem } from './../../redux/showcaseItems/showcaseItems.actions';
import {
  selectItems,
  selectCurrentIndex
} from './../../redux/showcaseItems/showcaseItems.selectors';

const HeroSection = props => {
  const { items, currentIndex, changeItem } = props;
  const handleNextItem = () => {
    changeItem(currentIndex + 1);
  };
  const handlePrevItem = () => {
    changeItem(currentIndex - 1);
  };

  return (
    <div className={styles.HeroSection}>
      <div onClick={handlePrevItem} className={styles.leftArrow}>
        <img src={leftArrow} alt="previous item" />
      </div>

      <HeroProductDisplay item={items[currentIndex]} />

      <div onClick={handleNextItem} className={styles.rightArrow}>
        <img src={rightArrow} alt="next item" />
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  items: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  changeItem: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    items: selectItems(state),
    currentIndex: selectCurrentIndex(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeItem: num => dispatch(changeItem(num))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroSection);
