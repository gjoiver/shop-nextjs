import React from 'react';
import useGetProducts from '@hooks/useGetProduct';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';
const ProductList = () => {
  const products = useGetProducts(API);
  const productsReduced = products.slice(0,50); 
  
  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {productsReduced.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
