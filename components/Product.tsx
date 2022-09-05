import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
// import { ShoppingCartIcon } from "@heroicons/react/outline";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/product.module.css";

interface Props {
  product: {
    _id: number;
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
  };
}

const Product: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product._id}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
          <button className={styles.button}>
            {/* <FaShoppingCart /> */}
            {/* <ShoppingCartIcon /> */}
          </button>
        </div>
        <div className={styles.details}>
          <h3 className={styles.name}>{product.name}</h3>
          <span className={styles.price}>${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
