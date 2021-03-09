import React from "react";
import Seekr from "./Seekr";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HttpIcon from "@material-ui/icons/Http";
import ReactCardFlip from "react-card-flip";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seekrOpen: false,
      isFlipped: false,
    };
    this.togglePopUp = this.togglePopUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  togglePopUp() {
    this.setState({
      seekrOpen: !this.state.seekrOpen,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div>
        <div className="projects-container">
          <div className="project-title">Projects</div>
          <div className="projects">
            <div>
              <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="vertical"
              >
                <front>
                  <button onClick={this.handleClick} className="project-pods">
                    <strong>seekr</strong>
                    <p>
                      A PWA that allows candidates and recruiters to connect
                    </p>
                  </button>
                </front>
                <back>
                  <button onClick={this.handleClick} className="project-pods">
                    <p>
                      Javascript &middot; Node &middot; Express &middot; React
                      &middot; Redux &middot; Postgres
                    </p>
                    <div className="links-circle">
                      <div className="seekr-website">
                        <a
                          className="links"
                          href="https://seekr-capstone.herokuapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#2b764c" }}
                        >
                          <HttpIcon fontSize="large" />
                        </a>
                      </div>
                      <div className="seekr-demo">
                        <a
                          className="links"
                          href="https://www.youtube.com/watch?v=ByWsbggwCiM&list=PLx0iOsdUOUml9uxVlTFGdM_l9MC2GqwBA&index=7"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#2b764c" }}
                        >
                          <YouTubeIcon fontSize="large" />
                        </a>
                      </div>
                      <div className="seekr-github">
                        <a
                          className="links"
                          href="https://github.com/Job-application-app-GH/job-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#2b764c" }}
                        >
                          <GitHubIcon fontSize="large" />
                        </a>
                      </div>
                    </div>
                  </button>
                </back>
              </ReactCardFlip>
            </div>
            {this.state.seekrOpen ? (
              <Seekr togglePopUp={this.togglePopUp} />
            ) : null}
            <div>
              <button className="project-pods">
                <strong>Pup Quiz</strong>
                <p>A mobile app that tests users' knowledge of dog breeds</p>
              </button>
            </div>
            <div>
              <button className="project-pods">
                <strong>Fruitify Juicery</strong>
                <p>
                  A mock e-commerce web application that sells juices &
                  smoothies
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
