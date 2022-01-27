import React, {createContext} from 'react';
import {useProduct} from '../hooks/useProduct';
import {ProductContextProps, Product, InitialValues, ProductCardHandlers} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);

const {Provider} = ProductContext;

export interface Props {
  product: Product;
  children: (args:ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, initialValues}:Props) => {
  const {counter, increaseBy, maxCount, reset, isMaxCountReached} = useProduct({initialValues});

  return (
    <Provider value={{counter, increaseBy, product, maxCount}}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count:counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  )
}