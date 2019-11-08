import React from 'react';

import styles from './FormInput.module.scss';

const FormInput = props => {
  const { handleChange, label, ...otherProps } = props;

  return (
    <div className={styles.group}>
      <input
        className={styles.inputField}
        {...otherProps}
        onChange={handleChange}
      />
      {label ? (
        <label
          className={
            (props.value.length ? styles.shrink : '') +
            ' ' +
            styles.formInputLabel
          }
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
