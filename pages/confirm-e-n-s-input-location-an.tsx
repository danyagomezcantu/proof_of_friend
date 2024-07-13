import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ResultsCard from "../components/results-card";
import Closing from "../components/closing";
import styles from "./confirm-e-n-s-input-location-an.module.css";

const ConfirmENSInputLocationAn: NextPage = () => {
  const router = useRouter();

  const onProofOfFriendClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDanyagomezcantuethTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const onContinueContainerClick = useCallback(() => {
    router.push("/chooses-type-of-experience");
  }, [router]);

  return (
    <div className={styles.confirmEnsInputLocationAn}>
      <div className={styles.background}>
        <div className={styles.heading}>
          <div className={styles.background1}>
            <div className={styles.why}>
              <img
                className={styles.ff162ac344989d2c5aZigZag24Icon}
                alt=""
                src="/659711ff162ac344989d2c5a-zigzag24png1@2x.png"
              />
              <div className={styles.heading1}>Let’s get you set up</div>
              <img
                className={styles.dbc30b418394d6d23cZigZag23Icon}
                alt=""
                src="/659711dbc30b418394d6d23c-zigzag23png1@2x.png"
              />
            </div>
          </div>
          <div className={styles.heading2}>
            <div className={styles.banner}>
              <div
                className={styles.proofOfFriend}
                onClick={onProofOfFriendClick}
              >
                Proof of Friend
              </div>
              <div
                className={styles.danyagomezcantueth}
                onClick={onDanyagomezcantuethTextClick}
              >
                danyagomezcantu.eth
              </div>
            </div>
            <div className={styles.navigation}>
              <div className={styles.link}>
                <div className={styles.home}>Home</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.mapSection}>
            <div className={styles.resultCardsCol}>
              <ResultsCard burbank="Brussels" />
              <ResultsCard
                burbank="Sydney"
                propBackgroundColor="rgba(255, 255, 255, 0.05)"
                propOpacity="0.5"
              />
              <ResultsCard
                burbank="London"
                propBackgroundColor="rgba(255, 255, 255, 0.05)"
                propOpacity="0.5"
              />
              <ResultsCard
                burbank="Denver"
                propBackgroundColor="rgba(255, 255, 255, 0.05)"
                propOpacity="0.5"
              />
              <ResultsCard
                burbank="Bangalore"
                propBackgroundColor="rgba(255, 255, 255, 0.05)"
                propOpacity="0.5"
              />
              <ResultsCard
                burbank="Istanbul"
                propBackgroundColor="rgba(255, 255, 255, 0.05)"
                propOpacity="0.5"
              />
              <ResultsCard
                burbank="New York"
                propBackgroundColor="rgba(255, 255, 255, 0.05)"
                propOpacity="0.5"
              />
              <ResultsCard
                burbank="Nairobi"
                propBackgroundColor="rgba(255, 255, 255, 0.05)"
                propOpacity="0.5"
              />
              <ResultsCard
                burbank="Paris"
                propBackgroundColor="rgba(255, 255, 255, 0.05)"
                propOpacity="0.5"
              />
              <ResultsCard
                burbank="Waterloo"
                propBackgroundColor="rgba(255, 255, 255, 0.05)"
                propOpacity="0.5"
              />
            </div>
            <iframe
              className={styles.map}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
          <div className={styles.selectYourCity}>select your city</div>
          <div className={styles.whatsYourSocialGoalParent}>
            <div className={styles.whatsYourSocial}>
              what’s your social goal?
            </div>
            <i className={styles.selectOne}>select one</i>
          </div>
          <div className={styles.goals}>
            <div className={styles.link1}>
              <div className={styles.iWantTo}>
                I want to expand my social circle
              </div>
            </div>
            <div className={styles.link2}>
              <div className={styles.iWantTo1}>
                I want to break out of my comfort zone
              </div>
            </div>
            <div className={styles.link3}>
              <div className={styles.iWantTo2}>
                I want to discover new activities
              </div>
            </div>
            <div className={styles.link4}>
              <div className={styles.iWantTo3}>
                I want to find like-minded people
              </div>
            </div>
            <div className={styles.link5}>
              <div className={styles.iWantTo4}>
                I want to make meaningful connections
              </div>
            </div>
          </div>
          <Closing />
          <div className={styles.continue} onClick={onContinueContainerClick}>
            <div className={styles.continue1}>continue</div>
            <img className={styles.continueChild} alt="" src="/polygon-2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmENSInputLocationAn;
