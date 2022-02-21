import React, { useState } from "react";
import Classes from "./header.module.css";
import { NavLink, Link } from "react-router-dom";
import { CgClose, CgMenuMotion } from "react-icons/cg";
import { motion } from "framer-motion";
import { FaGit, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isUnderline, setIsUnderLine] = useState(false);
  const [isUnderLineProject, setIsUnderLineProject] = useState(false);
  const [isUnderLineContact, setIsUnderLineContact] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const isActiveStyle = {
    textDecoration: "none",
    color: "red",
    transition: "0.5s all ease-in-out",
    borderBottom: "10px",
    borderBottomColor: "red",
  };
  return (
    <React.Fragment>
      <header className={Classes.header}>
        <div className={Classes.logo}>
          <div className={Classes.logo_name}>
            <div className={Classes.header_logo}>
              <Link to="/">
                <div>e</div>
              </Link>
            </div>
            <div>
              <Link to="/">
                <h1>ENAHOLO AKHERE</h1>
                <h5>SOFTWARE DEVELOPER</h5>
              </Link>
            </div>
          </div>
          <div className={Classes.menu}>
            {showNavBar ? (
              <CgClose
                className={Classes.open_menu}
                onClick={() => setShowNavBar((prev) => !prev)}
              />
            ) : (
              <CgMenuMotion
                className={Classes.open_menu}
                onClick={() => setShowNavBar((prev) => !prev)}
              />
            )}
          </div>
        </div>

        <motion.nav
          className={
            showNavBar
              ? Classes.navs
              : [Classes.navs, Classes.close_menu].join(" ")
          }
        >
          <ul>
            <li
              onClick={() => setShowNavBar(false)}
              style={{
                borderBottom: "5px",
                borderWidth: "fit-to-length",
              }}
            >
              <NavLink
                to="/"
                style={({ isActive }) => {
                  if (isActive) {
                    setIsUnderLine(true);
                    setIsUnderLineProject(false);
                    setIsUnderLineContact(false);
                    return isActiveStyle;
                  }
                }}
              >
                HOME
              </NavLink>
              {isUnderline && <hr />}
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => setShowNavBar(false)}
                style={({ isActive }) => {
                  if (isActive) {
                    setIsUnderLine(false);
                    setIsUnderLineProject(true);
                    setIsUnderLineContact(false);
                    return isActiveStyle;
                  }
                }}
              >
                PROJECTS
              </NavLink>
              {isUnderLineProject && <hr />}
            </li>
            <li>
              <NavLink
                to="/contacts"
                onClick={() => setShowNavBar(false)}
                style={({ isActive }) => {
                  if (isActive) {
                    setIsUnderLine(false);
                    setIsUnderLineProject(false);
                    setIsUnderLineContact(true);
                    return isActiveStyle;
                  }
                }}
              >
                CONTACTS
              </NavLink>
              {isUnderLineContact && <hr />}
            </li>
          </ul>
          <footer className={Classes.footer}>
            <div>
              <a
                href="https://github.com/Enaholo-Akhere"
                target="_blank"
                rel="noreferrer"
              >
                <FaGit />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/enaholo-akhere-2253a213a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/message/6GFV6TCAHTVHB1"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1UCYs20ULU1BDFwfFNKS7-Tf1yFo9d0oy/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </footer>
        </motion.nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
