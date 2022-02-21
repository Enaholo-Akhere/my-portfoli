import React from "react";
import Classes from "./about.module.css";

const Aboutme = ({ about, name, image, state, country }) => {
  return (
    <React.Fragment>
      <div className={Classes.about_container}>
        <div className={Classes.images}>
          <img src={image} alt="Enaholo Akhere" />
          <p>Name: {name}</p>
          <p>State: {state}</p>
          <p>Country: {country}</p>
        </div>
        <div className={Classes.proficiencies_skills}>
          <fieldset className={Classes.fieldset}>
            <legend>About Me</legend>
            <div className={Classes.about_proficiency}>
              <div className={Classes.fieldset_paragragh}>
                <p>{about}</p>
                <div className={Classes.proficiencies}>
                  <h3>Proficencies</h3>
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>Mongodb</li>
                    <li>Express</li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Aboutme;
