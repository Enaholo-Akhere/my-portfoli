import React from "react";
import { FcLeftDown2 } from "react-icons/fc";
import Classes from "../explore/explore.module.css";

const Explore = ({ setIsShowExplore, isShowExplore }) => {
  return (
    <React.Fragment>
      <div className={Classes.show_explore}>
        <div
          className={
            !isShowExplore ? Classes.click_explore : Classes.hide_explore
          }
        >
          <p>Explore</p>
          <FcLeftDown2
            className={Classes.left_down}
            onClick={() => setIsShowExplore(true)}
          />
        </div>
        {/*
        <div
          className={
            isChat ? Classes.chatus_constumer : Classes.chatus_constumer_hide
          }
        >
          <div className={Classes.online_support_explore}>
            <p className={Classes.chatus_paragragh}>
              <span> I'm ENA, you? </span>
              <span>
                <FaArrowUp
                  onClick={() => setIsChat(true)}
                  className={Classes.show_icon}
                />
              </span>
            </p>

            <FcOnlineSupport className={Classes.online_support_icon} />
          </div>

          <div className={Classes.chatus}>
            <h4>
              <span>Write a message</span>
              <span>
                <FaArrowDown
                  className={Classes.arrowup}
                  onClick={() => setIsChat(false)}
                />
              </span>
            </h4>
            <input type="text" placeholder="email" />
            <textarea type="text" placeholder="message" maxLength="80" />
            <button>Send</button>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Explore;
