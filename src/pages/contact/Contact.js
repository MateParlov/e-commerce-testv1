import React from 'react';
import styles from './Contact.module.scss';
import ContactInfo from '../../components/contactInfo/ContactInfo';
import ContactForm from '../../containers/contactForm/ContactForm';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.info}>
        <h1 className={styles.title}>CONTACT US</h1>
        <p className={styles.subtitle}>
          We’re here to help and answer any question you might have or if you
          just need find us and say hi.
        </p>
        <p className={styles.subtitle}>We look forward to hearing from you</p>
      </div>
      <div className={styles.mapAndFormBox}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
