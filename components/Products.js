import React from "react";
import Product from "./Product";
import styles from "../styles/products.module.css";

// type ProductType = {
//   _id: number;
//   id: number;
//   name: string;
//   price: number;
//   category: string;
//   image: string;
// };

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
