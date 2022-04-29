import React from 'react';
import Image from 'next/image';
import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppingCartItem = () => {
  return (
    <div className={styles.ShoppingCartItem}>
      <figure>
        <Image src="https://jch.com.co/wp-content/uploads/2020/06/DSC09734-Editar.jpg" alt="camisa-bowling-negra" />
      </figure>
      <p>Camisa Bowling Negra</p>
      <p>$80.000</p>
    </div>
  );
};

export default ShoppingCartItem;
