import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCartChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="bg-dark text-white"
            onChange={onProductCartChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />

            <ProductTitle className="text-bold" />

            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            value={product.count}
            onChange={onProductCartChange}
            style={{
              width: "100px",
            }}
            className="bg-dark text-white"
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
