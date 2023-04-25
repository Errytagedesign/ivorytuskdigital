import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { FaArrowRight, FaSearch } from "react-icons/fa";

import logo1 from "../../public/assets/logos1.svg";
import logo2 from "../../public/assets/logos2.svg";
import logo3 from "../../public/assets/logos3.svg";
import logo4 from "../../public/assets/logos4.svg";
import logo5 from "../../public/assets/logos5.svg";
import logo6 from "../../public/assets/logos6.svg";
import logo7 from "../../public/assets/logos7.svg";
import logo8 from "../../public/assets/logos8.svg";
import logo9 from "../../public/assets/logos9.svg";
import logo10 from "../../public/assets/logos10.svg";
import logo11 from "../../public/assets/logos11.svg";
import logo12 from "../../public/assets/logos12.svg";
import logo13 from "../../public/assets/logos13.svg";
import logo14 from "../../public/assets/logos14.svg";
import logo15 from "../../public/assets/logos15.svg";
import logo16 from "../../public/assets/logos16.svg";
import logo17 from "../../public/assets/logos17.svg";
import logo18 from "../../public/assets/logos18.svg";
import logo19 from "../../public/assets/logos19.svg";
import logo20 from "../../public/assets/logos20.svg";

export default function Home() {
  const data = [
    { name: "ALL" },
    { name: "Following" },
    { name: "Trend" },
    { name: "E-commerce" },
    { name: "DAO" },
    { name: "DeFi" },
    { name: "CeFi" },
    { name: "Tokenizing Gold " },
    { name: "Educaion" },
    { name: "Web3 Startup" },
    { name: "Collectibles" },
    { name: "Mining" },
  ];
  const Brands = [
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo1,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo2,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo3,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo4,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo5,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo6,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo7,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo8,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo9,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo10,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo11,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo12,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo13,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo14,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo15,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo16,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo17,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo18,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo19,
    },
    {
      follow: "Follow",
      raid: "Raid",
      followers: "2911 followers",
      imageUrl: logo20,
    },
  ];

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
          <h2 data-aos="zoom-in-left" data-aos-duration="1500">
            Welcome digital users
          </h2>
          <p data-aos="zoom-in-left" data-aos-duration="1500">
            {" "}
            Hop in the Trends, make an impact, comment & engage for a win.
          </p>

          <div
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            className={`${styles.searchContainer} col-7 mx-auto`}
          >
            <FaSearch className={styles.search} />
            <input
              type="search "
              name="search"
              placeholder="Search for communities"
              className="form-control text-center"
            />
          </div>
          <Link
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            href="/about"
            className="mt-3"
          >
            <p>
              {" "}
              Learn more about IvoryTusk
              <FaArrowRight className="ms-3" />
            </p>
          </Link>
        </section>

        <section className={`${styles.follow} d-flex flex-column `}>
          <article className="d-flex flex-wrap justify-content-between">
            {data.map(({ idx, name }) => (
              <div
                data-aos="fade-in-down"
                data-aos-duration="1500"
                className={`${styles.names} m-1`}
                key={idx}
              >
                <p> {name} </p>
              </div>
            ))}
          </article>
          <article className="d-flex flex-wrap justify-content-between gap-3 mt-5">
            {Brands.map(({ idx, imageUrl, follow, followers, raid }) => (
              <div
                className={`${styles.brands}  d-flex flex-column align-items-center justify-content-between flex-fill`}
                key={idx}
              >
                <Image src={imageUrl} alt="Brand logos" />
                <small> {followers} </small>
                <button className="grey-btn col-12">{follow}</button>
                <button className="grey-btn col-12">{raid}</button>
              </div>
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
