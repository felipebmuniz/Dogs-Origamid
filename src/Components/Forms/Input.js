import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type={type}
        {...props}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
