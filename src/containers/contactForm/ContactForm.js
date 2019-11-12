import React, { Component } from "react";
import styles from "./ContactForm.module.scss";
//component imports
import FormInput from "../../components/UI/form-input/FormInput";
import CustomButton from "../../components/UI/CustomButton/CustomButton";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      title: "",
      message: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();

    this.setState(() => {
      return { email: "", title: "", message: "" };
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => {
      return { [name]: value };
    });
  };

  render() {
    const { email, title, message } = this.state;
    return (
      <div className={styles.ContactForm}>
        <h3 className={styles.title}>Ask a Question</h3>
        <form onSubmit={this.handleFormSubmit}>
          <FormInput
            value={email}
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="email"
            required
          />
          <FormInput
            value={title}
            handleChange={this.handleChange}
            type="text"
            name="title"
            label="title"
            required
          />
          <textarea
            value={message}
            name="message"
            onChange={this.handleChange}
            className={styles.textArea}
            required
          ></textarea>

          <CustomButton>SEND</CustomButton>
        </form>
      </div>
    );
  }
}

export default ContactForm;
