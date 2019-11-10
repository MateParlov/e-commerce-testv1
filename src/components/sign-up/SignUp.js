import React, { Component } from 'react';
import styles from './SignUp.module.scss';
import { withRouter } from 'react-router-dom';
//components imports
import FormInput from '../UI/form-input/FormInput';
import CustomButton from '../UI/CustomButton/CustomButton';
//firebase imports
import {
  auth,
  createUserProfileDocument
} from './../../firebaseConfig/firebase.utils';
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMsg: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(() => {
      return { [name]: value };
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        errorMsg: 'Passwords dont match',
        password: '',
        confirmPassword: ''
      });
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errorMsg
    } = this.state;
    return (
      <div className={styles.signUp}>
        <h2 className={styles.title}>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className={styles.signUpForm} onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="confirm password"
            required
          />
          {errorMsg ? <h3>{errorMsg}</h3> : null}
          <CustomButton>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
