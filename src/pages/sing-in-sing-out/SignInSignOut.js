import React from 'react';
import styles from './SignInSignOut.module.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignInSignOut = props => {
  return (
    <div className={styles.SignInSignOut}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignOut;
