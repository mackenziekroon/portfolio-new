import React from "react";
import Seekr from "./Seekr";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HttpIcon from "@material-ui/icons/Http";
import ReactCardFlip from "react-card-flip";
import seekrScreen from "../seekrScreen.png";
import pupquiz from "./pupquiz.png";

class PupQuiz extends React.Component {
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
                src={pupquiz}
              />
              <div className="projects-title">Pup Quiz</div>
              <p>A mobile app that tests users' knowledge of dog breeds</p>
              <p onClick={this.handleClick} className="card-detail-btn">
                Click for details
              </p>
            </button>
          </div>
          <div>
            {/* THIS IS THE BACK OF THE CARD */}
            <button className="project-pods-back">
              {/* <img
              className="seekr-img"
              id="image-one"
              alt=""
              src={seekrScreen}
            /> */}
              <p>
                React Native &middot; Javascript &middot; Node &middot; Express
                &middot; Postgres
              </p>
              <div className="links-circle">
                <div className="seekr-github">
                  <a
                    className="links"
                    href="https://github.com/mackenziekroon/stackathon_project"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#b6bb8b" }}
                  >
                    <GitHubIcon fontSize="large" />
                  </a>
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

export default PupQuiz;
