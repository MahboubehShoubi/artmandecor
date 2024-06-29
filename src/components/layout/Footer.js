import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";

import styles from "@/layout/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.backgroundImage}
        src="/images/background/Architecture-01.png"
        alt="footer-background"
      />
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <section className={styles.footerItem1}>
            <h3 className={styles.footerItemHeader}>
              Company in Lines<span>.</span>
            </h3>
            <p>
              The lysine contingency - it's intended to prevent the spread of
              the animals is case they ever got off the island. Dr. Wu inserted
              a gene that makes.
            </p>
            <ul className={styles.socialMediaFooter}>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </section>

          <div className={styles.footerItem2}>
            <h3 className={styles.footerItemHeader}>
              Quick Links<span>.</span>
            </h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/project">Works</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <section className={styles.footerItem3}>
            <h3 className={styles.footerItemHeader}>
              Head Office<span>.</span>
            </h3>
            <section className={styles.footerItem3Box}>
              <section>
                <IoLocation />
                <a href="#">1422 Aqua blue Road st.aaaaaaaaa</a>
              </section>

              <section>
                <MdEmail />
                <a href="#">admin@email.com</a>
              </section>

              <section>
                <BiSupport />
                <a href="#">support@email.com</a>
              </section>

              <section>
                <IoMdCall />
                <a href="#">0123456789</a>
              </section>
            </section>
          </section>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomRight}>
            <p>
              ©2024 - Powered By <span>M.Shoubi</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
