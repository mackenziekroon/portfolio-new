import React from "react";
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
    // this.togglePopUp = this.togglePopUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // togglePopUp() {
  //   this.setState({
  //     seekrOpen: !this.state.seekrOpen,
  //   });
  // }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div>
        <div id="projects" className="projects-container">
          <div className="project-title">Projects</div>
          <div className="projects">
            <TempSeekr />
            <PupQuiz />
            <Juicery />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
