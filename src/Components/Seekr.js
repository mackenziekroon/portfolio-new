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
                <div className="seekr-demo">Watch demo</div>
                <div className="seekr-github">View code</div>
                <div className="seekr-tech-stack">Tech Stack: daklsnd</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seekr;
