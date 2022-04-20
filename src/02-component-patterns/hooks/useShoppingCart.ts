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

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCartValue;
        return { ...rest };
      }
      return {
        ...oldShoppingCartValue,
        [product.id]: {
          ...product,
          count: count,
        },
      };
    });
  };

  return {
      shoppingCart, onProductCartChange
  }

}
