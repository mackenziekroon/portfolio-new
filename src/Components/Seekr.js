import React from "react";

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
          <div className="seekr-content">
            <div className="seekr-heading">
              seekr - a Progressive Web App that allows candidates and
              prospective employers to match each other and connect
            </div>
            <button
              className="seekr-close-btn"
              onClick={this.props.togglePopUp}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Seekr;
