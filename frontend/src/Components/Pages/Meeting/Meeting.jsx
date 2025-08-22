import React from "react";
import classes from "./Meeting.module.css";
import AnonLogo from "../../../img/AnonLogo.png";

const Meeting = () => {
  return (
    <div className={classes.Meeting}>
      <div className={classes.MeetingContent}>
        <div className={classes.MeetingView}>
          <h1 className={classes.anon}>anon</h1>
          <h1 className={classes.chat}>chat</h1>
          <div className={classes.Logo}>
            <div className={classes.rectangle}>
              <img src={AnonLogo}/>
            </div>
          </div>
          <div className={classes.MeetingDescription}>
            <div className={classes.MeetDescText}>
              <h1 className={classes.description}>
                Делись мыслями, не боясь осуждения. Просто нажми "Начать" и говори о чём угодно.
              </h1>
            </div>
            <div className={classes.BtnStart}><span>Начать</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;