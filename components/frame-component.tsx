import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  rectangle39?: string;
  iWantToExpandMySocialCirc?: string;
  prop?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  rectangle39,
  iWantToExpandMySocialCirc,
  prop,
  propTop,
  propWidth,
  propLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
      left: propLeft,
    };
  }, [propTop, propWidth, propLeft]);

  return (
    <div
      className={[styles.vectorParent, className].join(" ")}
      style={frameDivStyle}
    >
      <img className={styles.frameChild} alt="" src={rectangle39} />
      <div className={styles.iWantTo}>{iWantToExpandMySocialCirc}</div>
      <div className={styles.div}>{prop}</div>
    </div>
  );
};

export default FrameComponent;
