import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./profile.module.css";

const Profile: NextPage = () => {
  const router = useRouter();

  const onClosingContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/chooses-type-of-experience");
  }, [router]);

  return (
    <div className={styles.profile}>
      <div className={styles.background}>
        <div className={styles.closing} onClick={onClosingContainerClick}>
          <div className={styles.proofOfFriend}>Proof of Friend © 2024</div>
          <div className={styles.takeAChanceContainer}>
            <span>{`Take a chance on `}</span>
            <span className={styles.proofOfFriend1}>Proof of Friend</span>
          </div>
        </div>
        <div className={styles.heading}>
          <div className={styles.welcome}>
            <div className={styles.brusselsThisUserContainer}>
              <span className={styles.brusselsThisUserContainer1}>
                <p className={styles.brussels}>📍 Brussels</p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.thisUserWants}>
                  This user wants to expand their social circle
                </p>
              </span>
            </div>
          </div>
          <img className={styles.headingChild} alt="" />
          <div className={styles.div} onClick={onContainerClick}>
            <div className={styles.child} />
            <div className={styles.attendEvent}>Attend event</div>
          </div>
          <div className={styles.headingItem} />
        </div>
      </div>
      <div className={styles.heading1}>
        <div className={styles.banner}>
          <div
            className={styles.proofOfFriend2}
            onClick={onClosingContainerClick}
          >
            Proof of Friend
          </div>
          <div className={styles.banner1}>
            <div className={styles.danyagomezcantueth}>danyagomezcantu.eth</div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.link}>
            <div className={styles.home}>Home</div>
          </div>
        </div>
      </div>
      <div className={styles.background1}>
        <div className={styles.profile1}>Profile</div>
      </div>
    </div>
  );
};

export default Profile;
