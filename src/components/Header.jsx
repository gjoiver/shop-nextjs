/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import Menu from '@components/Menu';
import MenuMobile from '@components/MenuMobile';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className={styles.Nav}>
        <img src={menu.src} alt="menu" className={styles.menu} onClick={handleToggle} />
        <div className={styles['navbar-left']}>
          <Link href={"/"} passHref>
           <img src={logo.src} alt="logo" className={styles['nav-logo']} />                       
          </Link>
          <ul>
            <li>
              <Link href={"/"}>
                All
                </Link>
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
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <p className={styles['navbar-email']} onClick={handleToggle}>
              platzi@example.com    
            </p>
            <li className={styles['nabvar-shopping-cart']}>
              <Image src={shoppingCart} alt="shopping cart" onClick={() => setToggleOrders(!toggleOrders)} />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggle && <MenuMobile />}
        {toggleOrders && <MyOrder />}
      </nav>
    </>
  );
};

export default Header;
