import styles from "@/module/SuccessWork.module.css";
import Counter from "@/module/Counter";

const SuccessWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.boxLeft}>
          <section className={styles.imgBottom}>
            <img src="/Images/about/img4.jpg" />
          </section>
          <section className={styles.imgTop}>
            <img src="/Images/about/img2.jpg" />
          </section>
        </div>

        <div className={styles.boxRight}>
          <section className={styles.boxLeftTop}>
            <img src="/Images/about/SuccessWork.png" />
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
