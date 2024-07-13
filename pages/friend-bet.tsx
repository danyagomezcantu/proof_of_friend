import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Background from "../components/background";
import styles from "./friend-bet.module.css";

const FriendBet: NextPage = () => {
  const router = useRouter();

  const onContainerClick = useCallback(() => {
    router.push("/chooses-type-of-experience");
  }, [router]);

  const onClosingContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkContainerClick = useCallback(() => {
    router.push("/leaderboard");
  }, [router]);

  return (
    <div className={styles.friendBet}>
      <div className={styles.background}>
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
          <div className={styles.closing} onClick={onClosingContainerClick}>
            <div className={styles.proofOfFriend}>Proof of Friend © 2024</div>
            <div className={styles.takeAChanceContainer}>
              <span>{`Take a chance on `}</span>
              <span className={styles.proofOfFriend1}>Proof of Friend</span>
            </div>
          </div>
          <div className={styles.link} onClick={onLinkContainerClick}>
            <div className={styles.goToProfile}>Go to Profile</div>
          </div>
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
          <div className={styles.link1}>
            <div className={styles.home}>Home</div>
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default FriendBet;
