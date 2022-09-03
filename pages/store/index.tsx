import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import { getProducts } from "../../lib/getProducts";

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
  type Product = {
    _id: number;
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
  };

  const products = JSON.parse(allProducts).json;

  return (
    <>
      <main>
        {products &&
          products.map((product: Product) => (
            <p key={product.id}>{product.name}</p>
          ))}
      </main>
    </>
  );
};

export default Store;
