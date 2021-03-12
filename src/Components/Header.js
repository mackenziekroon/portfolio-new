import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

class Header extends React.Component {
  listener = null;
  state = {
    nav: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.pageYOffset > 140) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <a href="#home" className="headings">
            Home
          </a>
          <a href="#projects" className="headings">
            Projects
          </a>
          <a href="#contact" className="headings">
            Contact Me
          </a>
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
    );
  }
}

export default Header;
