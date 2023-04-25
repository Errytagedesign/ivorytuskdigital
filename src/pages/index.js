import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ivory Tusk</title>
        <meta
          name="description"
          content="Hop in the Trends, make an impact, comment & engage for a win."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>here</main>
    </>
  );
}
