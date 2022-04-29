import React from 'react';
import Image from 'next/image';
import styles from '@styles/NewPassword.module.scss';

import logo from '@logos/logo_yard_sale.svg';
const NewPassword = () => {
  return (
    <main className={styles.NewPassword}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles['new-password-logo']} />
        <h1 className={styles.title}>Create a new password</h1>
        <p className={styles.subtitle}>Enter a new password for you account</p>
        <form action="/" className={styles.form}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" id="password" className={styles['input input-password']} placeholder="*********" />
          <label htmlFor="new-password" className={styles.label}>
            Re-enter password
          </label>
          <input type="password" id="new-password" className={styles['input new-input-password']} placeholder="*********" />
          <input type="submit" value="Confirm" className={styles['primary-button login-button']} />
        </form>
      </div>
    </main>
  );
};

export default NewPassword;
