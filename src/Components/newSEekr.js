import React from "react";
import Seekr from "./Seekr";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HttpIcon from "@material-ui/icons/Http";
import ReactCardFlip from "react-card-flip";
import seekrScreen from "../seekrScreen.png";
import seekr1 from "./seekr1.png";

class TempSeekr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="vertical"
        >
          <div>
            {/* THIS IS THE FRONT OF THE CARD */}
            <button className="project-pods">
              <img
                className="img-container"
                // id="image-one"
                alt=""
                src={seekr1}
              />
              {/* <div className="img-container"></div> */}
              <div>
                <div className="projects-title">seekr</div>
                <p className="project-desc">
                  A PWA that allows candidates and recruiters to connect
                </p>
              </div>
              <p onClick={this.handleClick} className="card-detail-btn">
                Click for details
              </p>
            </button>
          </div>
          <div>
            {/* THIS IS THE BACK OF THE CARD */}
            <button className="project-pods-back">
              <div className="pods-content-back">
                <div className="tech-group">
                  <div className="tech">Javascript</div>
                  <div className="tech">React</div>
                  <div className="tech">Redux</div>
                  <div className="tech">Node</div>
                  <div className="tech">Express</div>
                  <div className="tech">Postgres</div>
                </div>

                <div className="links-circle">
                  <div className="seekr-website">
                    <a
                      className="links"
                      href="https://seekr-capstone.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#b6bb8b" }}
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
                      style={{ color: "#b6bb8b" }}
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
                      style={{ color: "#b6bb8b" }}
                    >
                      <GitHubIcon fontSize="large" />
                    </a>
                  </div>
                </div>
              </div>
              <p className="card-detail-btn" onClick={this.handleClick}>
                Flip Back
              </p>
            </button>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default TempSeekr;
