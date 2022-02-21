import Classes from "./description.module.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Description = ({ heading1, paragraph, image }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      console.log(inView);
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    }
    if (!inView) {
      console.log(inView);
      animation.start({
        x: "-100vw",
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    }
  }, [inView]);
  return (
    <div ref={ref} className={Classes.container_descr}>
      <motion.div animate={animation}>
        <div className={Classes.descr_h1}>
          <h1>{heading1}</h1>
        </div>
        <div className={Classes.descr_para}>
          <p>{paragraph}</p>
        </div>
        <div className={Classes.descr_image}>
          <img src={image} alt="softskills" />
        </div>
      </motion.div>
    </div>
  );
};

export default Description;
