import React, { Component } from 'react';

import styles from './SignIn.module.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import { signInWithGoogle } from '../../../../firebaseConfig/firebase.utils';
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };
  handleInput = e => {
    const { name, value } = e.target;

    this.setState(() => {
      return { [name]: value };
    });
  };
  render() {
    return (
      <div className={styles.SignIn}>
        <h2 className={styles.title}>I alredy hvae an account</h2>
        <span className={styles.subtitle}>
          Sign in with your email and password
        </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleInput}
            label="email"
            type="email"
            value={this.state.email}
            name="email"
            required
          />
          <FormInput
            handleChange={this.handleInput}
            type="password"
            label="password"
            value={this.state.password}
            name="password"
            required
          />
          <div className={styles.buttonBox}>
            <CustomButton>SIGN IN</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
