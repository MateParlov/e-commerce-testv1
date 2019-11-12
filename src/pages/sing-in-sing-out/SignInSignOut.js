import React from "react";
import styles from "./SignInSignOut.module.scss";
//component imports
import SignIn from "../../containers/sign-in/SignIn";
import SignUp from "../../containers/sign-up/SignUp";

const SignInSignOut = () => {
  return (
    <div className={styles.SignInSignOut}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignOut;
