import React, { useState } from "react";

// styles
import styles from "./NavBar.module.scss";

// images
import BrandLogo from "../../../public/assets/Ivorytusk-Logo.svg";
import Lunch from "../../../public/assets/lunch.svg";
import Elephant from "../../../public/assets/elephant.svg";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  const handleNav = () => {
    setToggle((current) => !current);
  };

  // console.log(NavLinks[0].explore);

  return (
    <div>
      <section className={`${styles.navContainer} `}>
        <nav className="d-flex container flex-row align-items-center justify-content-between">
          {/* Logo */}
          <Link
            href="/"
            className={` ${styles.logo} col-8 col-md-2 d-flex flex-row align-items-center `}
          >
            <Image src={BrandLogo} alt=" Ivory tusk Logo" />
          </Link>
          <div
            className={` col-12 col-lg-9 d-flex flex-column flex-lg-row ${
              toggle ? styles.navMove : styles.displayNav
            }`}
          >
            <aside className="col-12 d-flex flex-column flex-lg-row  align-items-center justify-content-between">
              {/* nav Links */}
              <section className="col-12 col-lg-6 d-flex justify-content-start ">
                <div
                  className={`${styles.navItems} d-flex flex-column flex-lg-row justify-content-between col-12 `}
                >
                  <Link
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    onClick={handleNav}
                    href="/explore"
                  >
                    Explore
                  </Link>
                  <a
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    onClick={handleNav}
                    href="https://Blockchainben.app"
                    target="_blank"
                  >
                    Blockchain Ben Updates
                  </a>
                  <Link
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    onClick={handleNav}
                    href="/about"
                  >
                    About us
                  </Link>
                </div>
              </section>

              {/* profile and btn */}
              <section className="col-12 col-lg-5 d-flex justify-content-between ">
                <button className="main-btn ">
                  <p>
                    <Image src={Lunch} alt="" />
                  </p>
                </button>

                <button className="main-btn ">
                  <p>
                    <Image src={Elephant} alt="" />
                  </p>
                </button>
                <button className="main-btn ">
                  <p>
                    {" "}
                    {/* {account
                    ? account.slice(0, 4) +
                      "..." +
                      account.slice(account.length - 4, account.length)
                    : "Connect Wallet"} */}
                    connect wallet
                  </p>
                </button>
              </section>
            </aside>
          </div>
          {/* Hambuger icon */}
          <div
            onClick={handleNav}
            className={toggle ? styles.open : styles.ham}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </section>

      {/* <div
        className={` connect d-flex flex-column align-items-end ${
          showConnectWallet ? "d-none" : "d-block"
        }`}
      >
        <ConnectWallet
          // handleConnectWallet={handleConnectWallet}
          closeModal={closeModal}
        />
      </div> */}
    </div>
  );
}

export default NavBar;
