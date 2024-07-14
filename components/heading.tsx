import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./heading.module.css";

export type HeadingType = {
  className?: string;
};

const Heading: NextPage<HeadingType> = ({ className = "" }) => {
  const router = useRouter();

  const onLinkContainerClick = useCallback(() => {
    router.push("/confirm-e-n-s-input-location-an");
  }, [router]);

  return (
    <div className={[styles.heading, className].join(" ")}>
      <div className={styles.banner}>
        <div className={styles.link} onClick={onLinkContainerClick}>
          <div className={styles.connectWallet}>Connect Wallet</div>
        </div>
        <div className={styles.proofOfFriend}>Proof of Friend</div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.link1}>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.link2} />
      </div>
    </div>
  );
};

export default Heading;
