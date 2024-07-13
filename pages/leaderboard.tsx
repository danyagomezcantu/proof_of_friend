import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./leaderboard.module.css";

const Leaderboard: NextPage = () => {
  const router = useRouter();

  const onClosingContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/chooses-type-of-experience");
  }, [router]);

  const onLinkContainerClick = useCallback(() => {
    router.push("/leaderboard");
  }, [router]);

  const onDanyagomezcantuethTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className={styles.leaderboard}>
      <div className={styles.backgroundParent}>
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
            <div className={styles.div}>
              <div className={styles.child} onClick={onRectangleClick} />
              <div className={styles.attendEvent}>Attend event</div>
            </div>
          </div>
          <div className={styles.link} onClick={onLinkContainerClick}>
            <div className={styles.seeProfile}>See Profile</div>
          </div>
        </div>
        <div className={styles.background1}>
          <div className={styles.leaderboard1}>Leaderboard</div>
        </div>
      </div>
      <img
        className={styles.youveBeenTo2EventsThisM}
        alt=""
        src="/youve-been-to-2-events-this-month-1@2x.png"
      />
      <div className={styles.heading1}>
        <div className={styles.banner}>
          <div
            className={styles.proofOfFriend2}
            onClick={onClosingContainerClick}
          >
            Proof of Friend
          </div>
          <div className={styles.banner1}>
            <div
              className={styles.danyagomezcantueth}
              onClick={onDanyagomezcantuethTextClick}
            >
              danyagomezcantu.eth
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.link1}>
            <div className={styles.home}>Home</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
