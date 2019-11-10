import React from 'react';
import styles from './HeroProductDisplay.module.scss';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
//component imports
import CustomButton from '../../UI/CustomButton/CustomButton';

const HeroProductDisplay = props => {
  const { title, description, imageUrl } = props.item;

  const handleCallToActionClick = () => {
    props.history.push('/shop/sneakers');
  };

  return (
    <React.Fragment>
      <div className={styles.contentSection}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.callToActionButtons}>
          <CustomButton
            buttonType="callToAction"
            onClick={handleCallToActionClick}
          >
            CHECK OUT ALL SNEAKERS
          </CustomButton>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
          className={styles.heroImage}
        ></div>
      </div>
    </React.Fragment>
  );
};

HeroProductDisplay.propTypes = {
  item: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(HeroProductDisplay);
