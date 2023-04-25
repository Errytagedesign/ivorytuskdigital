import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { FaArrowRight, FaSearch } from "react-icons/fa";

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
      <main className={`${styles.home} d-flex flex-column container `}>
        <section
          className={`${styles.hero} col-12 col-md-7 d-flex flex-column mx-auto text-center`}
        >
          <h2>Welcome digital users</h2>
          <p> Hop in the Trends, make an impact, comment & engage for a win.</p>

          <div className={`${styles.searchContainer} col-7 mx-auto`}>
            <FaSearch className={styles.search} />
            <input
              type="search "
              name="search"
              placeholder="Search for communities"
              className="form-control text-center"
            />
          </div>
          <Link href="/about" className="mt-3">
            <p>
              {" "}
              Learn more about IvoryTusk
              <FaArrowRight className="ms-3" />
            </p>
          </Link>
        </section>
      </main>
    </>
  );
}
