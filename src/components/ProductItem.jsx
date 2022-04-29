/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductItem.module.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product?.images[0]} alt={product?.title} width={240} height={240} layout="responsive" />

      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure>
        <img onClick={() => handleClick(product)} src={addToCartImage.src} alt="add to cart"/>  
        </figure>
               
      </div>
    </div>
  );
};

export default ProductItem;
