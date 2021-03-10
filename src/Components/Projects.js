import React from "react";
import Seekr from "./Seekr";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HttpIcon from "@material-ui/icons/Http";
import ReactCardFlip from "react-card-flip";
import seekrScreen from "../seekrScreen.png";
import TempSeekr from "./newSEekr";
import PupQuiz from "./PupQuiz";
import Juicery from "./Juicery";

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
            <TempSeekr />
            {/* {this.state.seekrOpen ? (
              <Seekr togglePopUp={this.togglePopUp} />
            ) : null} */}
            {/* <div>
              <button className="project-pods">
                <strong>Pup Quiz</strong>
                <p>A mobile app that tests users' knowledge of dog breeds</p>
              </button>
            </div> */}
            <PupQuiz />
            {/* <div>
              <button className="project-pods">
                <strong>Fruitify Juicery</strong>
                <p>
                  A mock e-commerce web application that sells juices &
                  smoothies
                </p>
              </button>
            </div> */}
            <Juicery />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
