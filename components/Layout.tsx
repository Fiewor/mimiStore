import React, { FC, ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Mimi store. Purchase quality and beautiful dresses."
        />
      </Head>
      <Header />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
