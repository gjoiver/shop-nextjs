import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/SendEmail.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import emailImage from '@icons/email.svg';
const SendEmail = () => {
  return (
    <main className={styles.SendEmail}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles['SendEmail-title']}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check you inbox for instructions on how to reset you password</p>
        <div className={styles['email-image']}>
          <Image src={emailImage} alt="email-sent-image" />
        </div>
        <button className={styles['primary-button login-button']}>Login</button>
        <p className={styles.resend}>
          <span>Dont receive the email?</span>
          <Link href={"/"}>Resend</Link>
        </p>
      </div>
    </main>
  );
};

export default SendEmail;
