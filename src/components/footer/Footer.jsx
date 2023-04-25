import React from "react";
import styles from "./Footer.module.scss";

// icons
import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

import { BiCopyright } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

import BrandLogo from "./../../../public/assets/Ivorytusk-Logo.svg";

function Footer() {
  return (
    <div className={`${styles.footer}  d-flex flex-column`}>
      <main className="d-flex container flex-column flex-lg-row  justify-content-between align-items-center align-items-lg-start ">
        {/* Logo */}
        <section
          className={`${styles.logo} col-12 col-md-8 col-lg-4 d-flex flex-column text-center text-lg-start mx-auto`}
        >
          <Link
            href="/"
            className="d-flex flex-row col-10 col-md-6 col-lg-12 mx-auto align-items-center "
          >
            <div>
              {" "}
              <Image
                className="col-6"
                src={BrandLogo}
                alt=" Ivorytusk Logo"
              />{" "}
            </div>
            {/* <h2> WolfPack Herd </h2>{" "} */}
          </Link>
          <p>
            {" "}
            Assets under management (AUM) refers to how much money or the total
            investment a financial institution manages for its clients.
          </p>

          <div className="community-container d-none d-lg-flex flex-column">
            <h4> Community </h4>
            <div className="icon">
              {" "}
              <a
                href="https://twitter.com/WolfPackHerd"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaTwitter />{" "}
              </a>{" "}
              <a
                href="https://t.me/WolfPackHerdNetwork"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaTelegramPlane />{" "}
              </a>{" "}
              <a
                href="https://discord.gg/VdjEbbx86n "
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaDiscord />{" "}
              </a>{" "}
              <a
                href="https://youtube.com/WolfPackHerdNetwork"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaYoutube />{" "}
              </a>{" "}
            </div>
          </div>
        </section>

        <section className="d-flex flex-row justify-content-between col-12 col-lg-7">
          <div className="d-flex flex-column flex-lg-row justify-content-between col-lg-6">
            {/* company */}
            <aside className="d-flex align-content-center col-12 col-lg-6 flex-column ">
              <h4> Company </h4>
              <Link href="/about">About</Link>
              <Link href="/team">Team</Link>
              <Link href="/contact"> Contact us </Link>
            </aside>

            {/* services */}
            <aside className="d-flex col-12 col-lg-6  flex-column ">
              <h4> Services </h4>
              <Link href="/ntfarts">
                NFT Arts <br /> <span>Coming soon </span>{" "}
              </Link>
              <Link href="/ivory">
                {" "}
                Ivory Tusk AUM <br /> <span>Coming soon </span>
              </Link>
              <Link href="/musicnft">
                {" "}
                NFT Stable Money <br /> <span>Coming soon </span>{" "}
              </Link>
              <Link href="/cryptocard">
                {" "}
                Crypto Giftcard <br /> <span>Coming soon </span>{" "}
              </Link>
              <Link href="/deficalendar">
                {" "}
                Defi Calendar <br /> <span>Coming soon </span>{" "}
              </Link>
              <Link href="/doxme">
                {" "}
                Dox.me <br /> <span>Coming soon </span>{" "}
              </Link>
              <Link href="/nfcsaving">
                {" "}
                NFC savings promo card <br /> <span>Coming soon </span>{" "}
              </Link>
            </aside>
          </div>

          <div className="d-flex flex-column flex-lg-row justify-content-start justify-content-lg-between col-lg-6">
            {/* Support */}
            <aside className="d-flex col-12 col-lg-6  flex-column ">
              <h4> Support </h4>
              <Link href="/about">Help center</Link>
              {/* <Link href="/careers"> Account informations</Link>
              <Link href="/donate"> Settings</Link>
              <Link href="/contact"> FAQ </Link> */}
            </aside>
            <aside className="d-flex col-12 col-lg-6  flex-column ">
              <h4> Resources </h4>

              <Link href="/contact"> API Docs </Link>
              <Link href="/contact"> Documentation </Link>
              <Link href="/contact"> Github </Link>
              <Link href="/contact"> Tutorial </Link>
            </aside>
          </div>
        </section>
        <div
          className={` ${styles.communityContainer} d-flex flex-column d-lg-none align-items-center `}
        >
          <h4> Community </h4>
          <div className="icon">
            <a
              href="https://twitter.com/WolfPackHerd"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaTwitter />{" "}
            </a>{" "}
            <a
              href="https://t.me/WolfPackHerdNetwork"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaTelegramPlane />{" "}
            </a>{" "}
            <a
              href="https://discord.gg/VdjEbbx86n "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaDiscord />{" "}
            </a>{" "}
            <a
              href="https://youtube.com/WolfPackHerdNetwork"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaYoutube />{" "}
            </a>{" "}
          </div>
        </div>
      </main>

      <article className="d-flex flex-column flex-lg-row justify-content-between align-items-center text-center text-lg-start">
        <small>
          {" "}
          <BiCopyright /> 2022 Wolfpackherd Network,inc. All rights reserved
        </small>
        <div className="d-flex col-8 col-md-3 mt-3 mt-lg-0 flex-row justify-content-between">
          <small> Terms of use</small>
          <small> Privacy policy</small>
        </div>
      </article>
    </div>
  );
}

export default Footer;
