import emailjs from "emailjs-com";
import React from "react";
import FormGroup from "@material-ui/core/FormGroup";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bc19jka",
        "template_5vzlnmk",
        e.target,
        "user_ENS9y1cCbWJ3GnGg03AYE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    console.log("submit!");
  }

  return (
    <div>
      <div id="contact" className="contact-container">
        <div className="contact-msg">
          Please reach out to discuss my projects or job opportunities!
        </div>
        <form className="contact-form-container" onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="btn-container">
              <input
                className="submit-btn"
                type="submit"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
