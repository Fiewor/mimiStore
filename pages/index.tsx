import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Image
        priority
        src="/images/background.PNG"
        className={styles.homeImage}
        height={600}
        width={1300}
        alt="Home Image"
        quality={100}
        layout="responsive"
      />
    </div>
  );
};

export default Home;
