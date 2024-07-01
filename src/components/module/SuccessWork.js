import styles from "@/module/SuccessWork.module.css";
import Counter from "@/module/Counter";
import Image from "next/image";

const SuccessWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.boxLeft}>
          <section className={styles.imgBottom}>
            <Image src="/images/about/img4.jpg" alt="image cobinet" width={1000} height={700}/>
          </section>
          <section className={styles.imgTop}>
            <Image src="/images/about/img2.jpg" alt="image cobinet" width={1000} height={700}/>
          </section>
        </div>

        <div className={styles.boxRight}>
          <section>
            <Image src="/images/about/SuccessWork.png" alt="description image" width={1000} height={700}/>
          </section>
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <div className={styles.counters}>
            <div className={styles.counter}>
              <span className={styles.project}>
                <Counter max={2200} time={1} />
              </span>
              <span>Finished projects</span>
            </div>

            <div className={styles.counter}>
              <span className={styles.employers}>
                <Counter max={350} time={25} />
              </span>
              <span>Projects in progress</span>
            </div>

            <div className={styles.counter}>
              <span className={styles.customers}>
                <Counter max={200} time={50} />
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
