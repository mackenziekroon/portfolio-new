import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Main = () => {
  return (
    <div>
      <div className="heading-container">
        <div className="links-container">
          <a
            href="https://www.linkedin.com/in/mackenziekroon/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2b764c" }}
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://github.com/mackenziekroon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2b764c" }}
          >
            <GitHubIcon fontSize="large" />
          </a>
        </div>
        <div className="heading">
          <h1 className="hello">Hello World, I'm Mackenzie Kroon</h1>
          <div className="line-border">
            <p>I am a Software Engineer</p>
            <p className="bottom-border">
              and a recent graduate from the Grace Hopper program at Fullstack
              Academy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
