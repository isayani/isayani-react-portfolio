import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";

function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h3>Contact Me</h3>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail />
            <h4>Email</h4>
            <a href="mailto:inshasayani@gmail.com" target="_blank" className="">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SlSocialLinkedin />
            <h4>LinkedIn</h4>
            <a
              href="www.linkedin.com/in/inshasayani"
              target="_blank"
              className=""
            >
              Connect with me
            </a>
          </article>
        </div>
        {/* START CONTACT FORM*/}
        <form>
          <input
            type="text"
            name="name"
            placeholder="First Name Last Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="youremail@email.com"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
