"use client";

import Link from "next/link";
import Image from "next/image";

// components
import SuccessWork from "@/module/SuccessWork";

// Styles css
import style from "@/template/MainPage.module.css";

// Cabinets icons
import { BiSolidCabinet } from "react-icons/bi";


// the Closet icons
import { MdDoorSliding } from "react-icons/md";


// Tv Stand icons
import { PiTelevisionBold } from "react-icons/pi";

// desk icons
import { PiDesk } from "react-icons/pi";

const MainPage = () => {
  return (
    <div className={style.container}>
      <SuccessWork />
      <div className={style.mainSection}>
        <div className={style.servicess}>
          <Image
            src="/images/background/about.png"
            alt="background img"
            width={2500}
            height={1080}
          />
          <div className={style.servicessContext}>
            <div className={style.topServicess}>
              <h3>OUR SERVICES</h3>
              <p>
                What We Do<span>.</span>
              </p>
            </div>
            <div className={style.bottomServiceses}>
              <div className={style.boxServices}>
                <div className={style.box}>
                  <BiSolidCabinet />
                  <p>
                    KITCHEN CABINET
                  </p>
                </div>
              </div>

              <div className={style.boxServices}>
                <div className={style.box}>
                  <PiDesk />
                  <p>
                    DESK
                  </p>
                </div>
              </div>

              <div className={style.boxServices}>
                <div className={style.box}>
                  <MdDoorSliding />
                  <p>
                    ROOM CLOSET
                  </p>
                </div>
              </div>

              <div className={style.boxServices}>
                <div className={style.box}>
                  <PiTelevisionBold />
                  <p>
                    TV STAND
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.gallery}>
          <div className={style.mainGallery}>
            <div className={style.leftBox}>
              <Image
                src="/images/kitchen/kitchen-31.jpg"
                alt="gallery image"
                width={2500}
                height={1080}
              />
            </div>
            <div className={style.rightBox}>
              <div className={style.rightTopContect}>
                <span>Why should you choose us?</span>
                <h3>Guaranteed the best quality, with our team of experts</h3>
                <p>
                  Artman Decor, producters kitchen cabinets and wardrobes and
                  interior decoration products , It guarantees the best quality
                  and the most suitable price in the presentation of its
                  products.
                </p>
              </div>
              <div className={style.rightCenterContect}>
                <Image
                  src="/images/desk/desk-3.jpg"
                  alt="gallery image"
                  width={2500}
                  height={1080}
                />
                <Image
                  src="/images/closet/Wall-closet-9.jpg"
                  alt="gallery image"
                  width={2500}
                  height={1080}
                />
                <Image
                  src="/images/other/other-2.jpg"
                  alt="gallery image"
                  width={2500}
                  height={1080}
                />
                <Image
                  src="/images/kitchen/kitchen-29.jpg"
                  alt="gallery image"
                  width={2500}
                  height={1080}
                />
              </div>
              <div className={style.rightbottomContect}>
                <Link href="/projects" className={style.linkProject}>
                  GALLERY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
