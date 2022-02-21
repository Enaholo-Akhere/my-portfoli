import Header from "../../components/header/header";
import Classes from "./contact.module.css";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import Footer from "../../components/footer/footer";

const Contacts = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        y: 0,
        transition: { duration: 1, type: "just" },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
        y: "-100vh",
        transition: { duration: 1, type: "just" },
      });
    }
  }, [inView]);
  return (
    <div className={Classes.contact_container}>
      <Header />
      <div>
        <div className={Classes.h1_para}>
          <h1>Skills & Experience</h1>
          <p>
            Since beginning my journey as a Software Developer three years ago,
            I've done several work for agencies and collaborated with talented
            people to create web products for both business and consumer use.
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use
            and built with best practices. The main area of my expertise is the
            MERN STACK Technologies, building small and medium Web Apps with
            scaling in mind. User friendliness and experience with beautiful
            animations and layouts is a must in all my projects no matter how
            little.
          </p>
          <p>
            With a knack for problem solving, I also love helping teammates when
            I can and providing solutions or ideas to managers when needed.
            Visit my{" "}
            <a
              href="https://www.linkedin.com/in/enaholo-akhere-2253a213a/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>{" "}
            profile for more details or just contact me on email
            <span> enaholoa@gmail.com</span>
          </p>
        </div>
        <div className={Classes.stack_and_skills_container} animate={animation}>
          <h1 className={Classes.stack_skills}>Stack Skills</h1>
          <div className={Classes.skills}>
            <fieldset>
              <legend>React 90%</legend>
              <div className={Classes.react}>
                <p animate={animation}></p>
              </div>
            </fieldset>
            <fieldset>
              <legend>NodeJS 70%</legend>
              <div className={Classes.nodejs}>
                <p></p>
              </div>
            </fieldset>
            <fieldset>
              <legend>JavaScript 85%</legend>
              <div className={Classes.javascript}>
                <p animate={animation}></p>
              </div>
            </fieldset>
            <fieldset>
              <legend>MongoDB 95%</legend>
              <div className={Classes.mongodb} ref={ref}>
                <motion.p animate={animation}></motion.p>
              </div>
            </fieldset>
            <fieldset>
              <legend>Express 70%</legend>
              <div className={Classes.express} ref={ref}>
                <motion.p animate={animation}></motion.p>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contacts;
