import React from "react";
import Classes from "./footer.module.css";
import { FaGit, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Footer;
