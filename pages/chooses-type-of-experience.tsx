import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Experiences from "../components/experiences";
import styles from "./chooses-type-of-experience.module.css";

const ChoosesTypeOfExperience: NextPage = () => {
  const router = useRouter();

  const onProofOfFriendClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDanyagomezcantuethTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const onContinueContainerClick = useCallback(() => {
    router.push("/leaderboard");
  }, [router]);

  return (
    <div className={styles.choosesTypeOfExperience}>
      <div className={styles.background}>
        <div className={styles.heading}>
          <div className={styles.heading1}>
            <div className={styles.banner}>
              <div
                className={styles.proofOfFriend}
                onClick={onProofOfFriendClick}
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
              <div className={styles.link}>
                <div className={styles.home}>Home</div>
              </div>
            </div>
          </div>
          <div className={styles.thisWeekIWantToWrapper}>
            <div className={styles.thisWeekI}>This week, I want to...</div>
          </div>
          <div className={styles.curatedOrRandomContainer}>
            <span className={styles.curatedOrRandomContainer1}>
              <p className={styles.curatedOrRandom}>Curated or random,</p>
              <p className={styles.whichWillYou}>which will you choose?</p>
            </span>
          </div>
          <Experiences />
        </div>
        <div className={styles.closing} onClick={onProofOfFriendClick}>
          <div className={styles.proofOfFriend1}>Proof of Friend © 2024</div>
          <div className={styles.takeAChanceContainer}>
            <span>{`Take a chance on `}</span>
            <span className={styles.proofOfFriend2}>Proof of Friend</span>
          </div>
        </div>
        <div className={styles.continue} onClick={onContinueContainerClick}>
          <div className={styles.letsGoParent}>
            <div className={styles.letsGo}>let’s go</div>
            <img className={styles.frameChild} alt="" src="/polygon-2.svg" />
          </div>
        </div>
        <div className={styles.link1} onClick={onContinueContainerClick}>
          <div className={styles.seeLeaderboard}>See Leaderboard</div>
        </div>
      </div>
      <div className={styles.background1}>
        <div className={styles.why}>
          <div className={styles.discover}>
            <img
              className={styles.ff162ac344989d2c5aZigZag24Icon}
              alt=""
              src="/659711ff162ac344989d2c5a-zigzag24png@2x.png"
            />
            <div className={styles.heading1Container}>
              <span className={styles.heading1Container1}>
                <p className={styles.discoverNew}>Discover new</p>
                <p className={styles.socialExperiences}>social experiences</p>
              </span>
            </div>
            <img
              className={styles.dbc30b418394d6d23cZigZag23Icon}
              alt=""
              src="/659711dbc30b418394d6d23c-zigzag23png@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosesTypeOfExperience;
