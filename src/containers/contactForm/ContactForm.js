import React, { Component } from 'react';
import styles from './ContactForm.module.scss';
//component imports
import FormInput from '../../components/UI/form-input/FormInput';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      title: '',
      message: ''
    };
  }

  render() {
    const { email, title, message } = this.state;
    return (
      <div className={styles.ContactForm}>
        <h3 className={styles.title}>Ask a Question</h3>
        <form>
          <FormInput value={email} type="email" name="email" label="email" />
          <FormInput value={title} type="text" name="title" label="title" />
          <textarea value={message} className={styles.textArea}></textarea>
          <CustomButton>SEND</CustomButton>
        </form>
      </div>
    );
  }
}

export default ContactForm;
