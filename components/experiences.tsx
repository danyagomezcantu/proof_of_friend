import type { NextPage } from "next";
import styles from "./experiences.module.css";

export type ExperiencesType = {
  className?: string;
};

const Experiences: NextPage<ExperiencesType> = ({ className = "" }) => {
  return (
    <div className={[styles.experiences, className].join(" ")}>
      <div className={styles.curated}>
        <div className={styles.div}>
          <div className={styles.child} />
          <div className={styles.beCreative}>
            <span className={styles.beCreativeTxtContainer}>
              <p className={styles.be}>be</p>
              <p className={styles.creative}>creative</p>
            </span>
          </div>
        </div>
        <div className={styles.div1}>
          <div className={styles.item} />
          <div className={styles.getActiveAnd}>get active and fit</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.inner} />
          <div className={styles.enjoyNewNightlife}>enjoy new nightlife</div>
        </div>
        <div className={styles.div3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.relaxAndUnwind}>relax and unwind</div>
        </div>
      </div>
      <div className={styles.random}>
        <img className={styles.randomIcon} alt="" src="/random.svg" />
        <div className={styles.beSurprised}>be surprised</div>
      </div>
    </div>
  );
};

export default Experiences;
