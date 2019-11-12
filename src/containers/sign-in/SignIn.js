import React, { Component } from "react";
import styles from "./SignIn.module.scss";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
//components import
import FormInput from "../../components/UI/form-input/FormInput";
import CustomButton from "../../components/UI/CustomButton/CustomButton";
//firebase import
import { signInWithGoogle, auth } from "../../firebaseConfig/firebase.utils";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
    }
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
            <CustomButton
              buttonType="isGoogleSignIn"
              onClick={signInWithGoogle}
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(SignIn);
