"use client";

import Link from "next/link";
import Image from "next/image";

import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";

import styles from "@/layout/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      
      <Image
        className={styles.backgroundImage}
        src="/images/background/Architecture-01.png"
        alt="footer-background"
        width={1200}
        height={350}
      />
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <section className={styles.footerItem1}>
            <h3 className={styles.footerItemHeader}>
              Company in Lines<span className={styles.point}> .</span>
            </h3>
            <p>
              {`The lysine contingency - it's intended to prevent the spread of
              the animals is case they ever got off the island. Dr. Wu inserted
              a gene that makes.`}
            </p>
            <ul className={styles.socialMediaFooter}>
              <li>
                <a href="#" target="-blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" target="-blank" rel="noreferrer">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="#" target="-blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" target="-blank" rel="noreferrer">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </section>

          <div className={styles.footerItem2}>
            <h3 className={styles.footerItemHeader}>
              Quick Links<span className={styles.point}> .</span>
            </h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <section className={styles.footerItem3}>
            <h3 className={styles.footerItemHeader}>
              Head Office<span className={styles.point}> .</span>
            </h3>
            <section className={styles.footerItem3Box}>
              <section>
                <IoLocation />
                <p>IRAN - Mazandaran - Nowshahr</p>
              </section>

              <section>
                <MdEmail />
                <p>artmandecor006@gmail.com</p>
              </section>

              <section>
                <BiSupport />
                <p>mnel79@yahoo.com</p>
              </section>

              <section>
                <IoMdCall />
                <p>+989214201622</p>
              </section>
            </section>
          </section>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomRight}>
            <p>
              {` © 2024 - Powered By`}
              <span> M.Shoubi</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
