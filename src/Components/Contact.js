import React from "react";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    return (
      <div>
        <div className="contact-container">
          <div className="contact-form-container">
            <h1>Let's get in touch</h1>
            <form onSubmit={this.submitEmail} method="POST">
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
