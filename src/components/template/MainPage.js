"use client";

import SuccessWork from "@/module/SuccessWork";

// Cobinets icons
import { MdOutlineSoupKitchen } from "react-icons/md";

// the Closet icons
import { BiCloset } from "react-icons/bi";
import { MdCurtainsClosed } from "react-icons/md";

// Tv Stand icons
import { PiTelevisionBold } from "react-icons/pi";

// desk icons
import { PiDesk } from "react-icons/pi";

// Styles css
import style from "@/template/MainPage.module.css";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className={style.container}>
      <SuccessWork />
      <div className={style.mainSection}>
        <div className={style.servicess}>
          <img src="/images/background/about.png" />
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
                  <MdOutlineSoupKitchen />
                  <p>
                    <span>01 </span>KITCHEN CABINET
                  </p>
                </div>
              </div>

              <div className={style.boxServices}>
                <div className={style.box}>
                  <PiDesk />
                  <p>
                    <span>02 </span>DESK
                  </p>
                </div>
              </div>

              <div className={style.boxServices}>
                <div className={style.box}>
                  <MdCurtainsClosed />
                  <p>
                    <span>03 </span>ROOM CLOSET
                  </p>
                </div>
              </div>

              <div className={style.boxServices}>
                <div className={style.box}>
                  <PiTelevisionBold />                  
                  <p>
                    <span>04 </span>TV STAND
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className={style.gallery}>
          <div className={style.mainGallery}>
            <div className={style.leftBox}>
              <img src="/images/kitchen/kitchen-31.jpg" />
            </div>
            <div className={style.rightBox}>
              <div className={style.rightTopContect}>
                <span>Why Choice Us</span>
                <h3>
                  We Give The Great Offer Pricing With Our Professionals Team
                  Certification
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className={style.rightCenterContect}>
                <img src="/images/desk/desk-3.jpg" />
                <img src="/images/closet/Wall-closet-9.jpg" />
                <img src="/images/other/other-2.jpg" />
                <img src="/images/kitchen/kitchen-29.jpg" />
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
