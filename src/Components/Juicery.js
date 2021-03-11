import React from "react";
import Seekr from "./Seekr";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HttpIcon from "@material-ui/icons/Http";
import ReactCardFlip from "react-card-flip";
import seekrScreen from "../seekrScreen.png";
import ecom1 from "./ecom1.png";

class Juicery extends React.Component {
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
                src={ecom1}
              />
              <div className="projects-title">Frutify Juicery</div>
              <p> A mock e-commerce web application that sells juices</p>

              <div onClick={this.handleClick} className="card-detail-btn">
                <p>Click for details</p>
              </div>
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
                      href="https://graceshopper-juicify.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#b6bb8b" }}
                    >
                      <HttpIcon fontSize="large" />
                    </a>
                  </div>

                  <div className="seekr-github">
                    <a
                      className="links"
                      href="https://github.com/grace-shopper-fruit-for-loops/graceshopper"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#b6bb8b" }}
                    >
                      <GitHubIcon fontSize="large" />
                    </a>
                  </div>
                </div>
              </div>
              <div onClick={this.handleClick} className="card-detail-btn">
                <p>Flip Back</p>
              </div>
            </button>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Juicery;
