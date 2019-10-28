import React from 'react';

import styles from './CustomButton.module.scss';

const CustomButton = props => {
  const { children, isGoogleSignIn, ...otherProps } = props;

  const googleSignIn = isGoogleSignIn ? styles.googleSignIn : null;

  return (
    <button
      className={styles.CustomButton + ' ' + googleSignIn}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
