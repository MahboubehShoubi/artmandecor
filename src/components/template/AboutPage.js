"use client";

import Image from "next/image";
import SuccessWork from "@/module/SuccessWork";
import VideoPlayer from "@/module/VideoPlayer";
import style from "@/template/AboutPage.module.css";

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
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.Apparently we had reached a great height in
            the atmosphere, for the sky was a dead black, and the stars had
            ceased to twinkle. By the same illusion which lifts the horizon of
            the sea to the level of the spectator on a hillsideApparently we had
            reached a great height in the atmosphere, for the sky was a dead
            black, and the stars had ceased to twinkle. By the same illusion
            which lifts the horizon of the sea to the level of the spectator on
            a hillsideApparently we had reached a great height in the
            atmosphere, for the sky was a dead black, and the stars had ceased
            to twinkle. By the same illusion which lifts the horizon of the sea
            to the level of the spectator on a hillsideApparently we had reached
            a great height in the atmosphere, for the sky was a dead black, and
            the stars had ceased to twinkle. By the same illusion which lifts
            the horizon of the sea to the level of the spectator on a
            hillsideApparently we had reached a great height in the atmosphere,
            for the sky was a dead black, and the stars had ceased to twinkle.
            By the same illusion which lifts the horizon of the sea to the level
            of the spectator on a hillside
          </p>
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
                <VideoPlayer width={700} height={500} src="/video/film.mp4" />
              </div>
              <div className={style.videoBoxMin}>
                <VideoPlayer height={300} src="/video/film.mp4" />
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
