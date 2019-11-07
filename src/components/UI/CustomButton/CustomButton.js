import React from 'react';

import styles from './CustomButton.module.scss';

const CustomButton = props => {
  const { children, buttonType, customClass, ...otherProps } = props;

  let additionalStyle = null;

  switch (buttonType) {
    case 'isGoogleSignIn':
      additionalStyle = styles.googleSignIn;
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

export default CustomButton;
