import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Category from "../../components/Category";
import Products from "../../components/Products";
import { getProducts } from "../../lib/getProducts";
import styles from "../../styles/store.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const allProducts = await getProducts();

  return {
    props: {
      allProducts,
    },
  };
};

const Store: NextPage = ({
  allProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const products = JSON.parse(allProducts).json;

  return (
    <div className={styles.card}>
      <Category
        category="Tech Wear"
        categoryCount={`${products.length} Products`}
      />

      <Products products={products} />
    </div>
  );
};

export default Store;
