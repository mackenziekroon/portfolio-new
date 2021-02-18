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
            <h1>Hey! this is the seekr pop up window!</h1>
            <button onClick={this.handleClick}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Seekr;
