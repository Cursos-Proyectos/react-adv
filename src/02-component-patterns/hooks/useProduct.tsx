import { useEffect, useState, useRef } from "react";
import {
  ProductCartArgs,
  Product,
  InitialValue,
} from "../interfaces/interfaces";

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValue,
}: {
  onChange?: (args: ProductCartArgs) => void;
  product: Product;
  value?: number;
  initialValue: InitialValue;
}) => {
  const [counter, setCounter] = useState(initialValue?.count || value);

  const isMounted = useRef(false);

  const { maxCount } = initialValue;

  const reset = () => {
    setCounter(initialValue?.count || value);
  };

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    if (maxCount && newValue > maxCount) return;
    setCounter(newValue);
    onChange &&
      onChange({
        count: newValue,
        product,
      });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReach: !!maxCount && maxCount === counter,
    maxCount,

    increaseBy,
    reset,
  };
};
