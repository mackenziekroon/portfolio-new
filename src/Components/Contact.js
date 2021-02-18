import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.message);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="contact-container">
          <div className="contact-form-container">
            <h1>Let's get in touch</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Full Name:
                <input
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Message:
                <input
                  type="text"
                  value={this.state.message}
                  name="message"
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" name="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
