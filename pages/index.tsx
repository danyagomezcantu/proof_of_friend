import type { NextPage } from "next";
import Heading from "../components/heading";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.background}>
        <div className={styles.heading}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <div className={styles.irlExperiencesForContainer}>
            <span className={styles.irlExperiencesForContainer1}>
              <p className={styles.irlExperiencesFor}>
                irl experiences for the
              </p>
              <p className={styles.chronicallyOnline}>chronically online.</p>
            </span>
          </div>
          <Heading />
          <div className={styles.readyForYour}>
            Ready for your next adventure? Connect your wallet.
          </div>
          <div className={styles.asFeaturedBanner}>
            <div className={styles.asFeaturedIn}>As featured in</div>
            <img className={styles.linkIcon} alt="" src="/link@2x.png" />
          </div>
        </div>
        <div className={styles.whyChoose}>
          <div className={styles.reasons}>
            <div className={styles.link}>
              <div className={styles.earnRewardsAnd}>
                Earn rewards and collect NFTs
              </div>
            </div>
            <div className={styles.link1}>
              <div className={styles.curatedExperiencesFor}>
                Curated experiences for every interest
              </div>
            </div>
            <div className={styles.link2}>
              <div className={styles.meetNewPeople}>
                Meet new people and expand your social circle
              </div>
            </div>
          </div>
          <div className={styles.wrapperPictures}>
            <img
              className={styles.picturesIcon}
              alt=""
              src="/pictures@2x.png"
            />
          </div>
          <div className={styles.whyParent}>
            <div className={styles.why}>
              <div className={styles.heading1Container}>
                <span className={styles.heading1Container1}>
                  <span className={styles.whyChoose1}>{`Why choose `}</span>
                  <span className={styles.proofOfFriend}>Proof of Friend</span>
                  <span className={styles.span}>?</span>
                </span>
              </div>
            </div>
            <img
              className={styles.ff162ac344989d2c5aZigZag24Icon}
              alt=""
              src="/659711ff162ac344989d2c5a-zigzag24png@2x.png"
            />
            <img
              className={styles.dbc30b418394d6d23cZigZag23Icon}
              alt=""
              src="/659711dbc30b418394d6d23c-zigzag23png@2x.png"
            />
          </div>
        </div>
        <div className={styles.closing}>
          <div className={styles.proofOfFriend1}>Proof of Friend © 2024</div>
          <div className={styles.takeAChanceContainer}>
            <span>{`Take a chance on `}</span>
            <span className={styles.proofOfFriend2}>Proof of Friend</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
