import { useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.image) {
    imgToShow = product.image;
  } else {
    imgToShow = noImage;
  }

  return (
    <img className={styles.productImg} src={imgToShow} alt={product.title} />
  );
};
