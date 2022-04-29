import React from 'react';
import styles from '@styles/MyAccount.module.scss';
const MyAccount = () => {
    return (
      <main className={styles.login}>
        <div className={styles['form-container']}>
          <h1 className={styles.title}>My account</h1>
          <form action="/" className={styles.form}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <p className={styles.value}>Joiver Gonzalez</p>

              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <p className={styles.value}>gjoiver@gmail.com</p>

              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <p className={styles.value}>*********</p>
            </div>
            <input
              type="submit"
              value="Edit"
              className={styles['secondary-button login-button']}
            />
          </form>
        </div>
      </main>
    );
};

export default MyAccount;