import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/Login.module.scss';
import logo from '@logos/logo_yard_sale.svg';
const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };
  return (
    <main className={styles.login}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles['login-logo']}/>

        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="text" name="email" className={styles['input input-email']} placeholder="example@gmail.com" />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" name="password" className={styles['input input-password']} placeholder="*********" />
          <button className={styles['primary-button login-button']} onClick={handleSubmit}>
            Log in
          </button>
          <Link href={"/recovery-password"}>Forgot my password</Link>
        </form>
        <button className={styles['secondary-button signup-button']}>Sign Up</button>
      </div>
    </main>
  );
};

export default Login;
