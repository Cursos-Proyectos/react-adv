import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  className?: string;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps) : JSX.Element
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface ProductCartArgs {
  product: Product;
  count: number
}

export interface ProductIncart extends Product {
  count: number;
}