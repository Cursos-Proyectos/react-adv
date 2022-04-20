import { ProductIncart, Product } from '../interfaces/interfaces';
import { useState } from 'react';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductIncart;
  }>({});

  const onProductCartChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCartValue) => {
      const productInCart: ProductIncart = oldShoppingCartValue[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCartValue,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCartValue;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCartValue;
      //   return { ...rest };
      // }
      // return {
      //   ...oldShoppingCartValue,
      //   [product.id]: {
      //     ...product,
      //     counter: count,
      //   },
      // };
    });
  };

  return {
      shoppingCart, onProductCartChange
  }

}
