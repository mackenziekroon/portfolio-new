import React from "react";
import Seekr from "./Seekr";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seekrOpen: false,
    };
    this.togglePopUp = this.togglePopUp.bind(this);
  }

  togglePopUp() {
    this.setState({
      seekrOpen: !this.state.seekrOpen,
    });
  }

  render() {
    return (
      <div>
        <div className="projects-container">
          <div className="project-title">Projects</div>
          <div className="projects">
            <div>
              <button onClick={this.togglePopUp} className="seekr">
                <strong>seekr</strong>
                <p>A PWA that allows candidates and recruiters to connect</p>
              </button>
            </div>
            {this.state.seekrOpen ? (
              <Seekr togglePopUp={this.togglePopUp} />
            ) : null}
            <div>
              <button className="pup-quiz">
                <strong>Pup Quiz</strong>
                <p>A mobile app that tests users' knowledge of dog breeds</p>
              </button>
            </div>
            <div>
              <button className="fruitfy-juicery">
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
