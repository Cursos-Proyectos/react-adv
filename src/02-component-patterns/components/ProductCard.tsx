import { createContext } from "react";

import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ProductCardHandlers, InitialValue } from "../interfaces/interfaces";
import {
  Product,
  ProductContextProps,
  ProductCartArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: React.ReactElement[] | React.ReactElement;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: ProductCartArgs) => void;
  value?: number;
  initialValue: InitialValue;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValue,
}: Props) => {
  const { counter, isMaxCountReach, maxCount, increaseBy, reset } = useProduct({
    onChange,
    product,
    value,
    initialValue,
  });

  return (
    <Provider
      value={{
        counter,
        maxCount,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          maxCount,
          count: counter,
          increaseBy,
          isMaxCountReached: isMaxCountReach,
          product,
          reset,
        })}
      </div>
    </Provider>
  );
};
