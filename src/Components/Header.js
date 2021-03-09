import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <div className="nav-bar">
          <div>Home</div>
          <div>Projects</div>
          <div>Contact Me</div>
        </div>
        <div className="links-container">
          <a
            href="https://www.linkedin.com/in/mackenziekroon/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#F1F4F9" }}
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://github.com/mackenziekroon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#F1F4F9" }}
          >
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
