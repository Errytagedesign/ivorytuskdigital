import React from "react";
import { FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
import styles from "@/styles/About.module.scss";
import AboutUs from "./../../public/assets/aboutUs.png";
import whatwedo from "./../../public/assets/whatwedo.png";
import { TeamData } from "../components/about/TeamData";
import Image from "next/image";

function About() {
  return (
    <main className={`${styles.about} d-flex flex-column`}>
      <section
        className={`${styles.heroContainer} container d-flex flex-column justify-content-center align-items-center text-center`}
      >
        <p data-aos="fade-left"> Nice to meet you!</p>
        <h2 data-aos="zoom-out"> About Our Company</h2>

        <div className={styles.ImageContainer}>
          <Image src={AboutUs} alt="" />
        </div>
      </section>

      <div
        className={`${styles.body} container d-flex flex-column align-items-center`}
      >
        {/* Who we are */}
        <section
          className={`${styles.goalsContainer} d-flex flex-column flex-lg-row justify-content-between align-items-center`}
        >
          <article data-aos="fade-right" className="col-12">
            <h3>Who we are</h3>
            <p>
              {" "}
              We are a free rewards database that aims to incentivize social
              engagements through various decentralized applications (dApps) on
              the Binance Chain and other upcoming blockchain networks. Our
              platform allows users to engage with dApps and earn rewards in the
              form of crypto tokens. <br /> <br />
              At IvoryTusk, we believe in the power of blockchain technology to
              revolutionize how we interact with digital assets and ecosystems.
              By utilizing dApps for their utilities, we build our own assets
              under management, which we then use to grant rewards to web3
              builders and their ecosystems. <br /> <br />
              We are a passionate team of blockchain enthusiasts with deep
              expertise in the crypto space. Our team is composed of experienced
              developers, marketers, and community managers who are dedicated to
              building a platform that promotes social engagement and rewards
              users for their participation in the web3 ecosystem. <br /> <br />
            </p>
          </article>
        </section>

        {/* Our Goals */}
        <section
          className={` ${styles.goalsContainer} d-flex flex-column flex-lg-row justify-content-between `}
        >
          <article data-aos="fade-right" className="col-12 col-lg-6 ">
            <h3>What we do </h3>
            <p>
              At IvoryTusk, we actively engage with various dApps on the Binance
              Chain and other chains to come, utilizing their utilities and
              building our own assets under management. These assets are then
              used to provide rewards in the form of crypto tokens to web3
              builders and their ecosystems. We aim to support projects and
              communities that are pushing the boundaries of blockchain
              technology and driving adoption in innovative ways.
            </p>

            <Image className="" src={whatwedo} alt="" />
          </article>
          <aside data-aos="zoom-out" className="col-12 col-lg-5 mt-5 mt-lg-0 ">
            <h3>Our mission </h3>
            <p>
              Our mission is to promote the adoption of blockchain technology
              and support the growth of the web3 ecosystem by rewarding users
              for their engagement and contribution. We strive to create a
              vibrant community of crypto enthusiasts, developers, and builders
              who share our vision of a decentralized future.
            </p>
            <h3 className="mt-5">Our Vision </h3>
            <p>
              We envision a future where blockchain technology is widely
              adopted, and the web3 ecosystem thrives. We believe that by
              incentivizing social engagements and supporting web3 builders, we
              can contribute to the growth and success of the decentralized
              internet. Our vision is to become a leading rewards platform in
              the blockchain space, driving adoption, and fostering
              collaboration among various blockchain projects and communities.
              <br /> <br />
              Join us at IvoryTusk and be a part of the next-generation
              blockchain revolution! Together, lets build a more decentralized,
              transparent, and inclusive digital future.
            </p>
          </aside>
        </section>

        {/* Our Team */}
        <section
          className={`${styles.teamContainer} d-flex flex-column  text-center`}
        >
          <div className="team-header">
            {" "}
            <h3> Meet Our Team </h3>
            {/* <h5>
              {" "}
              Our expert team is made up of creatives with technical Knowhow,
              strategist who think outside the box, and developers who push
              innovation.{" "}
            </h5> */}
          </div>

          <section
            className={`${styles.teamWrap} d-flex flex-wrap justify-content-center gap-3`}
          >
            {TeamData.map((team, idx) => (
              <article
                key={idx}
                className={`${styles.teamCardContainer} flex-fill`}
              >
                <div className={`${styles.teamPic}`}>
                  <Image className="" src={team.imageUrl} alt="" />
                </div>
                <h4> {team.name} </h4>
                <p> {team.role} </p>
                <small> {team.small ? team.small : ""} </small>
                <div
                  className={`${styles.social}  d-flex flex-row justify-content-between col-7 mx-auto`}
                >
                  <a href={team.twLink} target="_blank" rel="noreferrer">
                    {" "}
                    <FaTwitter />{" "}
                  </a>{" "}
                  <a href={team.tgramLink} target="_blank" rel="noreferrer">
                    {" "}
                    <FaTelegramPlane />{" "}
                  </a>{" "}
                  <a href={team.linkedLink} target="_blank" rel="noreferrer">
                    {" "}
                    <FaLinkedin />{" "}
                  </a>{" "}
                  <a href={team.emailLink} target="_blank" rel="noreferrer">
                    {" "}
                    <MdEmail />{" "}
                  </a>{" "}
                </div>{" "}
              </article>
            ))}
          </section>
        </section>
      </div>
    </main>
  );
}

export default About;
