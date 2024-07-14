"use client";

import Image from "next/image";
import SuccessWork from "@/module/SuccessWork";
import VideoPlayer from "@/module/VideoPlayer";
import style from "@/template/AboutPage.module.css";

// Icons
import { GrUserWorker } from "react-icons/gr";
import { TbTools } from "react-icons/tb";
import { GiWoodenCrate } from "react-icons/gi";
import { BiSolidCabinet } from "react-icons/bi";
import { MdDoorSliding } from "react-icons/md";
import { RiTableAltFill } from "react-icons/ri";
import { ImOffice } from "react-icons/im";
import { MdOutlineAddHomeWork } from "react-icons/md";


function AboutPage() {
  return (
    <>
      <SuccessWork />
      <div className={style.container}>
        <div className={style.context}>
          <div className={style.titleBox}>
            <Image
              src="/images/logo/frame.png"
              alt="frame"
              width={100}
              height={100}
            />
            <h1>
              About <span>Us</span>
            </h1>
          </div>
          <div className={style.textBox}>
            <p className={style.topText}>
              ArtmanDecor with 17 years of continuous experience in designing,
              manufacturing and implementing all kinds of kitchen cabinets,
              including classic, modern and neoclassical cabinets, as well as
              home interior decoration, store and exhibition decoration, we
              guarantee the best quality by using the following items.
            </p>
          </div>
          <div className={style.employeeBox}>
            <div className={style.employeeBoxText}>
              <div>
                <GrUserWorker />
                <p>Experienced and expert staff</p>
              </div>
            </div>
            <div className={style.employeeBoxImg}>
              <Image
                src="/images/about/employee.jpg"
                width={1000}
                height={800}
                alt="About Image"
              />
            </div>
          </div>

          <div className={style.materialsBox}>
            <div className={style.materialsBoxText}>
              <div>
                <GiWoodenCrate />
                <p>Using the best brands of raw materials</p>
              </div>
            </div>
            <div className={style.materialsBoxImg}>
              <Image
                src="/images/about/material.jpg"
                width={1000}
                height={800}
                alt="About Image"
              />
            </div>
          </div>

          <div className={style.machineryBox}>
            <div className={style.machineryBoxText}>
              <div>
                <TbTools />
                <p>Advanced modern machinery and tools</p>
              </div>
            </div>
            <div className={style.machineryBoxImg}>
              <Image
                src="/images/about/machinery.jpg"
                width={1000}
                height={800}
                alt="About Image"
              />
            </div>
          </div>

          <div className={style.textBoxBottom}>
            <h4>Artman Decor products:</h4>
            <ul>
              <li>
                <BiSolidCabinet />
                Kitchen cabinet ( classic - neoclassic - modern )
              </li>
              <li>
                <MdDoorSliding />
                Closets and wallclosets ( rail door - open, etc. )
              </li>
              <li>
                <RiTableAltFill />
                Store decor ( shelf - counter, etc. )
              </li>
              <li>
                <ImOffice />
                Office decor ( desk - files, etc. )
              </li>
              <li>
                <MdOutlineAddHomeWork />
                Home decor ( TV box - partition, etc. )
              </li>
            </ul>
          </div>

          <div className={style.aboutGalery}>
            <div className={style.aboutGaleryImg}>
              <div className={style.aboutGaleryImgBox}>
                <Image
                  src="/images/about/commendation/1.jpg"
                  alt="commendation image"
                  className={style.aboutImg}
                  width={1000}
                  height={700}
                />
              </div>
              <div className={style.aboutGaleryImgBox}>
                <Image
                  src="/images/about/commendation/loh2.jpg"
                  alt="image loh"
                  className={style.lohImg}
                  width={1000}
                  height={700}
                />
              </div>
              <div className={style.aboutGaleryImgBox}>
                <Image
                  src="/images/about/commendation/3.jpg"
                  alt="commendation image"
                  className={style.aboutImg}
                  width={1000}
                  height={700}
                />
              </div>
            </div>
            <div className={style.aboutGaleryVideo}>
              <div className={style.videoBoxMax}>
                <VideoPlayer width={700} height={500} src="/video/film.mp4" poster="/images/about/commendation/film1.jpg"/>
              </div>
              <div className={style.videoBoxMin}>
                <VideoPlayer height={300} src="/video/film.mp4" poster="/images/about/commendation/film1.jpg"/>
              </div>
              <div className={style.imgLoh}>
                <Image
                  src="/images/about/commendation/loh.jpg"
                  alt="letter of commendation"
                  width={500}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
