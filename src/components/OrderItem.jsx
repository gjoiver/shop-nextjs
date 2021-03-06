import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      {!!product?.images[0] && (
        <figure>
          <Image src={product?.images[0]} alt={product?.title} width={'75px'} height={'75px'} />
        </figure>
      )}

      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image onClick={() => handleRemove(product)} src={close} alt="close-icon" className={styles['DeleteItem-Icon']} />
    </div>
  );
};

export default OrderItem;
