import React from "react";
import seekrScreen from "../seekrScreen.png";
import seekrScreen2 from "../seekrScreen2.png";
import seekrScreen3 from "../seekrScreen3.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HttpIcon from "@material-ui/icons/Http";

class Seekr extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("closing");
  }

  render() {
    return (
      <div>
        <div className="seekr-modal">
          <div className="seekr-container">
            <button
              className="seekr-close-btn"
              onClick={this.props.togglePopUp}
            >
              x
            </button>
            <div className="seekr-heading">
              <p className="line-border-projects">
                <strong>seekr</strong> is a Progressive Web App that allows
                candidates and prospective employers in the tech industry to
                match each other based on skills
              </p>
            </div>
            <div className="seekr-content">
              <div className="seekr-details">
                <img
                  className="seekr-img"
                  id="image-one"
                  alt=""
                  src={seekrScreen}
                />
                {/* <img className="seekr-img" alt="" src={seekrScreen2} /> */}
                <img className="seekr-img" alt="" src={seekrScreen3} />
              </div>

              <div>
                <div className="links-circle">
                  <div className="seekr-website">
                    <a
                      className="links"
                      href="https://seekr-capstone.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    >
                      <GitHubIcon fontSize="large" />
                    </a>
                  </div>
                </div>
                <div className="tech-stack-circle">
                  <div className="seekr-tech-stack">
                    <div>Created with:</div>
                    <ul>
                      <li>Javascript</li>
                      <li>Node</li>
                      <li>Express</li>
                      <li>React</li>
                      <li>Redux</li>
                    </ul>
                    {/* Javascript, Node, Express, React, Redux */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seekr;
