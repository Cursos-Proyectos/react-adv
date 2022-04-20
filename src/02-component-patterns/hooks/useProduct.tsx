import { useEffect, useRef, useState } from "react";
import { ProductCartArgs, Product } from "../interfaces/interfaces";

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: {
  onChange?: (args: ProductCartArgs) => void;
  product: Product;
  value?: number;
}) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange &&
      onChange({
        count: newValue,
        product,
      });
  };
  return {
    counter,
    increaseBy,
  };
};
