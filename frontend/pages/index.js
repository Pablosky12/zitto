import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zitto</title>
        <meta
          name="keywords"
          content="coffee, brew, espresso, pour over, chemex, v60, aeropress, kalitta, recipe"
        />
      </Head>
      <h1>Welcome to Zitto</h1>
    </div>
  );
}
