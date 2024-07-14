import styles from "@/module/SuccessWork.module.css";
import Counter from "@/module/Counter";
import Image from "next/image";

const SuccessWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.boxLeft}>
          <section className={styles.imgBottom}>
            <Image
              src="/images/about/img4.jpg"
              alt="image cobinet"
              width={1000}
              height={700}
            />
          </section>
          <section className={styles.imgTop}>
            <Image
              src="/images/about/img2.jpg"
              alt="image cobinet"
              width={1000}
              height={700}
            />
          </section>
        </div>

        <div className={styles.boxRight}>
          <section>
            <Image
              src="/images/about/SuccessWork.png"
              alt="description image"
              width={1000}
              height={700}
            />
          </section>
          <p>
            Artman Decor, with 17 years of continuous experience in designing,
            manufacturing and implementing all kinds of kitchen cabinets,
            including classic, modern and neoclassical cabinets, as well as home
            interior decoration, store and exhibition decoration, guarantees the
            best quality and the most reasonable price.
          </p>
          <div className={styles.counters}>
            <div className={styles.counter}>
              <span className={styles.project}>
                <Counter max={200} time={30} />
              </span>
              <span>Finished projects</span>
            </div>

            <div className={styles.counter}>
              <span className={styles.employers}>
                <Counter max={8} time={800} />
              </span>
              <span>Projects in progress</span>
            </div>

            <div className={styles.counter}>
              <span className={styles.customers}>
                <Counter max={15} time={400} />
              </span>
              <span>Projects under review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessWork;
