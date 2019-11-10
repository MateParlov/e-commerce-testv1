import React from 'react';
import styles from './CustomButton.module.scss';
import PropTypes from 'prop-types';
const CustomButton = props => {
  const { children, buttonType, customClass, ...otherProps } = props;

  let additionalStyle = null;
  switch (buttonType) {
    case 'isGoogleSignIn':
      additionalStyle = styles.googleSignIn;
      break;
    case 'callToAction':
      additionalStyle = styles.callToAction;
      break;
    case 'inverted':
      additionalStyle = styles.inverted;
      break;
    case 'delete':
      additionalStyle = styles.delete;
      break;
    default:
      additionalStyle = null;
  }
  return (
    <button
      className={
        styles.CustomButton + ' ' + additionalStyle + ' ' + customClass
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string,
  buttonType: PropTypes.string,
  customClass: PropTypes.string
};

export default CustomButton;
