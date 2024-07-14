import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./background.module.css";

export type BackgroundType = {
  className?: string;
};

const Background: NextPage<BackgroundType> = ({ className = "" }) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.betOnAFriendWrapper}>
        <div className={styles.betOnA}>{`Bet on a friend `}</div>
      </div>
      <div className={styles.telegramUsernameOptionalParent}>
        <TextField
          className={styles.telegramUsernameOptional}
          color="primary"
          label="Telegram username (optional)"
          size="medium"
          placeholder="Share your response here"
          variant="outlined"
          type="text"
          sx={{ "& .MuiInputBase-root": { height: "56px" }, width: "714px" }}
        />
        <TextField
          className={styles.twitterUsernameOptional}
          color="primary"
          label="Twitter username (optional)"
          size="medium"
          placeholder="Share your response here"
          variant="outlined"
          type="text"
          sx={{ "& .MuiInputBase-root": { height: "56px" }, width: "714px" }}
        />
        <TextField
          className={styles.discordUsernameOptional}
          color="primary"
          label="Discord username (optional)"
          size="medium"
          placeholder="Share your response here"
          variant="outlined"
          type="text"
          sx={{ "& .MuiInputBase-root": { height: "56px" }, width: "714px" }}
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <a 
          className={styles.goToBet}
          href="https://proof-of-friends-three.vercel.app/"
        >
          Go to bet!
        </a>
      </div>
    </div>
  );
};

export default Background;
