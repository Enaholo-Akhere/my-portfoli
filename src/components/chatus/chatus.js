import React, { useState } from "react";
import Classes from "../chatus/chatus.module.css";
import { FcOnlineSupport } from "react-icons/fc";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Chatus = () => {
  const [isChat, setIsChat] = useState(false);
  return (
    <React.Fragment>
      <motion.div
        className={Classes.show_explore}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        initial={{ x: 200 }}
      >
        <div
          className={
            isChat ? Classes.chatus_constumer : Classes.chatus_constumer_hide
          }
        >
          <div className={Classes.online_support_explore}>
            <p className={Classes.chatus_paragragh}>
              <span>Hey! I am ENA, I can help</span>
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
            <input type="email" placeholder="email" />
            <textarea type="text" placeholder="message" maxLength="80" />
            <button>Send</button>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Chatus;
