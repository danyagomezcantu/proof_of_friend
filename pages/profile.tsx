import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import styles from "./profile.module.css";

const Profile: NextPage = () => {
  const router = useRouter();

  const onClosingContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/chooses-type-of-experience");
  }, [router]);

  const onLinkContainerClick = useCallback(() => {
    router.push("/friend-bet");
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
        </div>
        <div className={styles.link} onClick={onLinkContainerClick}>
          <div className={styles.goToFriend}>Go to Friend Betting</div>
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
      <div className={styles.background1}>
        <div className={styles.profile1}>Profile</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <FrameComponent
            rectangle39="/rectangle-39.svg"
            iWantToExpandMySocialCirc="I want to expand my social circle"
            prop="70%"
          />
          <FrameComponent
            rectangle39="/rectangle-391.svg"
            iWantToExpandMySocialCirc="I want to break out of my comfort zone"
            prop="51%"
            propTop="275px"
            propWidth="692px"
            propLeft="0px"
          />
          <FrameComponent
            rectangle39="/rectangle-392.svg"
            iWantToExpandMySocialCirc="I want to discover new activities"
            prop="50%"
            propTop="550px"
            propWidth="622px"
            propLeft="7px"
          />
        </div>
        <img
          className={styles.youveBeenTo2EventsThisM}
          alt=""
          src="/youve-been-to-2-events-this-month-11@2x.png"
        />
        <img className={styles.frameChild} alt="" src="/frame-12.svg" />
      </div>
    </div>
  );
};

export default Profile;
