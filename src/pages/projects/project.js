import React from "react";
import Header from "../../components/header/header";
import Classes from "../projects/project.module.css";

const Projects = () => {
  return (
    <React.Fragment>
      <div className={Classes.project}>
        <Header />
        <h1>Projects PAGE</h1>
      </div>
    </React.Fragment>
  );
};

export default Projects;
