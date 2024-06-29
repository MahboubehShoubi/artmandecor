"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Styles from "@/layout/Header.module.css";

// icons
import { FaMap } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdHome } from "react-icons/md";

function Header(props) {
  const { imgheader, part1, part2, part3 } = props;

  const [isShow, setIsShow] = useState(false);
  console.log(isShow);

  const closeHambergerMenuHandler = (e) => {
    if (isShow) {
      setIsShow(false);
    }
  };

 

  return (
    <div
      className={Styles.headerPageContainer}
      onClick={closeHambergerMenuHandler}
    >
      <div className={Styles.headerTop}>
        <p className={Styles.textDescription}>
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black
        </p>

        <div className={Styles.logo}>
          <Link href="/">
            <img src="/images/logo/Artmanlogo2.png" />
          </Link>
        </div>

        <div className={Styles.communication}>
          <div className={Styles.item1}>
            <section className={Styles.item1}>
              <section>
                <FaMap />
              </section>
              <section className={Styles.itemRightText}>
                <span>Find Us</span>
                <span>325 admirat unit,North cost,USA</span>
              </section>
            </section>
          </div>

          <div className={Styles.item2}>
            <section className={Styles.item2}>
              <section>
                <MdAttachEmail />
              </section>
              <section className={Styles.itemRightText}>
                <span>Email</span>
                <span>admin@bbbbbbbb.com</span>
              </section>
            </section>
          </div>

          <div className={Styles.item3}>
            <section className={Styles.item3}>
              <section>
                <IoMdCall />
              </section>
              <section className={Styles.itemRightText}>
                <span>call us now</span>
                <span>0123456789</span>
              </section>
            </section>
          </div>
        </div>
      </div>

      {/* ----------------------------- Navbar----------------------------- */}

      <div className={Styles.navbar}>
        <div className={Styles.navMenuMobil}>
          <Link href="/" className={Styles.logo2}>
            <img src="/images/logo/Artmanlogo2.png" alt="logo" />
          </Link>

          <button
            className={Styles.hambergerMenu}
            onClick={(e) => setIsShow(!isShow)}
          >
            {!isShow && <FaBars />}
          </button>

          <div className={isShow ? `${Styles.menuMobilBoxOpen}`
                                : `${Styles.menuMobilBoxClose}` } >
         
            <section className={Styles.navBoxMenu}>
              <div className={Styles.headerMenu}>

                {isShow ? <img src="/images/logo/Artmanlogo2.png" /> : null}
                
                <button className={Styles.closeBtn} onClick={(e) => setIsShow(!isShow)}>
                   <IoMdClose />
                </button>
              </div>
              <div className={Styles.topBox}>
                <ul className={Styles.menuUl}>
                  <li className={Styles.menuLitem}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={Styles.menuLitem}>
                    <Link href="/about">About</Link>
                  </li>
                  <li className={Styles.menuLitem}>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className={Styles.menuLitem}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <section className={Styles.bottomBox}>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaWhatsapp />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
              </section>
            </section>
          </div>
        </div>

        <section className={Styles.navMenuDesktop}>
          <section className={Styles.navLeft}>
            <ul className={Styles.navLeftMenu}>
              <li className={Styles.navItem}>
                <Link href="/">Home</Link>
              </li>
              <li className={Styles.navItem}>
                <Link href="/about">About</Link>
              </li>
              <li className={Styles.navItem}>
                <Link href="/projects">Projects</Link>
              </li>
              <li className={Styles.navItem}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </section>

          <section className={Styles.navRight}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </section>
        </section>
      </div>

      {/* <!---------------------  Main Header ------------------> */}

      <div className={Styles.headerMain}>
        <img className={Styles.headermainImg} src={imgheader} alt="imgHeader" />
        <div className={Styles.headerMainContent}>
          <div className={Styles.mainContent}>
            <div className={Styles.headerLeft}>
              <span> {part1} </span>
              <span> {part2} </span>
            </div>
            <div className={Styles.headerRight}>
              <MdHome />
              <Link href="/">Home</Link>
              <span> / </span>
              <a href="#" className={Styles.rightLink}>
                {part3}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
