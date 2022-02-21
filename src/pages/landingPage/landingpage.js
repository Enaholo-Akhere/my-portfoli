import React, { useState } from "react";
import Header from "../../components/header/header";
import { MdArrowRight } from "react-icons/md";
import Classes from "../landingPage/landingpage.module.css";
import { useNavigate } from "react-router-dom";
import Description from "../../components/description/desciption";
import communication from "../../components/photos/images/communication.jpg";
import interskill from "../../components/photos/images/interskill.png";
import fastpace from "../../components/photos/images/fast.jpg";
import team from "../../components/photos/images/team.jpg";
import Explore from "../../components/explore/explore";
import Chatus from "../../components/chatus/chatus";
import Footer from "../../components/footer/footer";
import Aboutme from "../../components/about/about";
import { Data } from "../../utils/aboutme/aboutmetexts";

const Home = () => {
  const [isShowExplore, setIsShowExplore] = useState(false);
  const navigate = useNavigate();
  const communicationskill = {
    image: communication,
    heading: "GOOD COMMUNIACTON SKILLS",
    para: `
    Proficient in JavaScript and the MERN Stack technology in general.
    I build highly responsive and scalable Web Apps as part of my
    hobbies.`,
  };
  const interskillobj = {
    image: interskill,
    heading: "GREAT INTERPERSONAL RELATIONSHIP SKILL",
    para: `
    Proficient in JavaScript and the MERN Stack technology in general.
    I build highly responsive and scalable Web Apps as part of my
    hobbies.`,
  };
  const fastpaceskill = {
    image: fastpace,
    heading: "FAST PACED LEARNER",
    para: `
    Proficient in JavaScript and the MERN Stack technology in general.
    I build highly responsive and scalable Web Apps as part of my
    hobbies.`,
  };
  const teamskills = {
    image: team,
    heading: "EXCELLENT TEAM PLAYER",
    para: `
    Proficient in JavaScript and the MERN Stack technology in general.
    I build highly responsive and scalable Web Apps as part of my
    hobbies.`,
  };

  return (
    <React.Fragment>
      <section className={Classes.home}>
        <Header />
        <article className={Classes.article}>
          <div className={Classes.h1_website_done}>
            <h1>Web Apps Developer.</h1>
          </div>
          <div className={Classes.home_paragraph}>
            <p>
              I am a React and NodeJS developer that loves building highly
              responsive and user friendly Web Apps. I deliver swiftly and build
              with scaling in mind.
            </p>
          </div>
          <div className={Classes.btn_container}>
            <div
              className={Classes.button_arrow}
              onClick={() => navigate("/projects")}
            >
              <div className={Classes.btn_btn}>
                <button>I need a website</button>
              </div>
              <div className={Classes.btn_icon}>
                <MdArrowRight className={Classes.icon} />
              </div>
            </div>
            <div
              className={Classes.button_hire}
              onClick={() => navigate("/contacts")}
            >
              <div className={Classes.btn_btn}>
                <button>I'm looking to hire</button>
              </div>
              <div className={Classes.btn_icon}>
                <MdArrowRight className={Classes.icon} />
              </div>
            </div>
          </div>
          <div className={Classes.explore_arrow_chat}>
            <Explore
              setIsShowExplore={setIsShowExplore}
              isShowExplore={isShowExplore}
            />
          </div>
        </article>
      </section>
      {isShowExplore && (
        <section>
          <Aboutme
            about={Data.about}
            name={Data.name}
            image={Data.image}
            state={Data.state}
            country={Data.country}
          />
          <section>
            <div className={Classes.softskills}>
              <Description
                image={communicationskill.image}
                heading1={communicationskill.heading}
                paragraph={communicationskill.para}
              />
              <Description
                image={interskillobj.image}
                heading1={interskillobj.heading}
                paragraph={interskillobj.para}
              />
              <Description
                image={fastpaceskill.image}
                heading1={fastpaceskill.heading}
                paragraph={fastpaceskill.para}
              />
              <Description
                image={teamskills.image}
                heading1={teamskills.heading}
                paragraph={teamskills.para}
              />
            </div>
          </section>
        </section>
      )}
      {isShowExplore && (
        <div className={Classes.chat_us_now}>
          <Chatus />
        </div>
      )}
      <div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
