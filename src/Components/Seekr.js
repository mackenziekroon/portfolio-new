import React from "react";
import seekrScreen from "../seekrScreen.png";

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
              <strong>seekr</strong>
              <p>
                a Progressive Web App that allows candidates and prospective
                employers to match each other and connect
              </p>
            </div>
            <div className="seekr-content">
              <div className="seekr-details">
                <img className="seekr-img" alt="" src={seekrScreen} />
              </div>
              <div className="seekr-links">
                <div className="seekr-demo">
                  <a
                    className="links"
                    href="https://www.youtube.com/watch?v=ByWsbggwCiM&list=PLx0iOsdUOUml9uxVlTFGdM_l9MC2GqwBA&index=7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
                <div className="seekr-github">
                  <a
                    className="links"
                    href="https://github.com/Job-application-app-GH/job-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
                <div className="seekr-tech-stack">
                  Tech Stack: Javascript, Node, Express, React, Redux
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
