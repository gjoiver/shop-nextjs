import React from 'react';
import Link from 'next/link';
import styles from '@styles/MenuMobile.module.scss';

const MenuMobile = () => {
  return (
    <div className={styles['mobile-menu']}>
      <ul>
        <li>
          <Link href={"/"}>CATEGORIES</Link>
        </li>
        <li>
          <Link href={"/"}>All</Link>
        </li>
        <li>
          <Link href={"/"}>Clothes</Link>
        </li>
        <li>
          <Link href={"/"}>Electronics</Link>
        </li>
        <li>
          <Link href={"/"}>Furnitures</Link>
        </li>
        <li>
          <Link href={"/"}>Toys</Link>
        </li>
        <li>
          <Link href={"/"}>Others</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href={"/orders"} passHref>
            <p className={styles.MyOrderTitle}>My orders</p></Link>
        </li>

        <li>
          <Link href={"/my-account"} passHref><p className={styles.MyAccountTitle}>My account</p></Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href={"/"} passHref>
            <p className={styles.email}>gjoiver@gmail.com</p> 
          </Link>
        </li>
        <li>
          <Link href={"/"} passHref>
            <p className={styles['sign-out']}>Sign out</p>
            
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
