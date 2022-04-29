import React from 'react';
import Image from 'next/images';
import styles from '@styles/ProductInfo.module.scss';

import ButtonAddCart from '@icons/bt_add_to_cart.svg';
const ProductInfo = () => {
  return (
    <>
      <Image src="https://jch.com.co/wp-content/uploads/2020/06/DSC09734-Editar.jpg" alt="camisa-bowling-negra" />
      <div className={styles.ProductInfo}>
        <p>$80.000</p>
        <p>Camiseta Bowling Negra</p>
        <p>Estas mirando la Camisa Bowling, un toque retro que te hará ver cool, ¿Que tal si te doblas las mangas? Pruebala con unos Jeans Básicos.</p>
        <button className={styles['primary-button add-to-cart-button']}>
          <Image src={ButtonAddCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
