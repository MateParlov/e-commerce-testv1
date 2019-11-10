import React from 'react';
import styles from './FormInput.module.scss';
import PropTypes from 'prop-types';

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

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

export default FormInput;
