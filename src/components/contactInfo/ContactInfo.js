import React from 'react';
import styles from './ContactInfo.module.scss';
const ContactInfo = props => {
  return (
    <div className={styles.ContactInfo}>
      <ul className={styles.info}>
        <li>Telefon: 01/555-001</li>
        <li>Adress: Ulica Antuna Bauera 2,Zagreb</li>
        <li>Email: leafShop@leafShop.hr</li>
      </ul>
      <div className={styles.map}>
        <iframe
          title="location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.8846436417225!2d15.987105215393449!3d45.81356861808438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7ab2442c82d%3A0xc47f4ad9f57e7182!2sUl.%20Antuna%20Bauera%202%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1573420164831!5m2!1sen!2shr"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
