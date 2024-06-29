"use client";

import { useState } from "react";
import Link from "next/link";
import style from "@/layout/HeaderMain.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const HeaderMain = () => {

  const [isShow, setIsShow] = useState(false);

  const closeMenuHandler = (e) => {
    if (isShow === true) {
      setIsShow(false);
    }
  };

  console.log(isShow);

  return (
      <div className={style.headercontainer} onClick={closeMenuHandler}>
        <div className={style.topHeader}></div>

        <div className={style.navbar}>
          <div className={style.navMenuMobil}>
            <Link href="/" className={style.logo2}>
              <img src="/images/logo/Artmanlogo2.png" alt="logo" />
            </Link>

            <button
              className={style.hambergerMenu}
              onClick={(e) => setIsShow(!isShow)}
            >
              {!isShow && <FaBars />}
            </button>

            <div
              className={
                isShow
                  ? `${style.menuMobilBoxOpen}`
                  : `${style.menuMobilBoxClose}`
              }
            >
              <section className={style.navBoxMenu}>
                <div className={style.headerMenu}>
                {isShow ? <img src="/images/logo/Artmanlogo2.png" /> : null}
                  <button
                    className={style.closeBtn}
                    onClick={(e) => setIsShow(!isShow)}
                  >
                    <IoMdClose />
                  </button>
                </div>
                <div className={style.topBox}>
                  <ul className={style.menuUl}>
                    <li className={style.menuLitem}>
                      <Link href="/">Home</Link>
                    </li>
                    <li className={style.menuLitem}>
                      <Link href="/about">About</Link>
                    </li>
                    <li className={style.menuLitem}>
                      <Link href="/projects">Projects</Link>
                    </li>
                    <li className={style.menuLitem}>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          <section className={style.navMenuDesktop}>
            <div className={style.logo}>
              <img src="/images/logo/Artmanlogo2.png" />
            </div>
            <section className={style.menu}>
              <ul className={style.menu}>
                <li className={style.navItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={style.navItem}>
                  <Link href="/about">About</Link>
                </li>
                <li className={style.navItem}>
                  <Link href="/projects">Projects</Link>
                </li>
                <li className={style.navItem}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </section>
          </section>
        </div>

        <div className={style.slider}>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            centeredSlides={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className={style.ImgBackground}
                src="/images/background/slid1.jpg"
                alt="header-background"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={style.ImgBackground}
                src="/images/background/slid2-2.jpg"
                alt="header-background"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                className={style.ImgBackground}
                src="/images/background/slid3.jpg"
                alt="header-background"
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <img
                className={style.ImgBackground}
                src="/images/background/slid4.jpg"
                alt="header-background"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={style.mainHeader}>
          <h2>
            <span>ENGINEERING</span> YOUR DREAMS WITH US
          </h2>
        </div>
      </div>
  );
};

export default HeaderMain;
