import React from "react";
import "./contact.scss";
import ContactText from "./ContactText";

const Contact = () => {
  return (
    <div className="contact--outer-container">
      <ContactText />
      <div className="contact--text-container">
        <p>
          Want to reach out, or interested in know more? feel free to reach me
          at any of these places. Maybe share your favorite game, book, or
          project with me!
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:BlakeTrapnell.dev@gmail.com">
              BlakeTrapnell.dev@gmail.com
            </a>
          </li>
          <li>
            Phone: <a href="tel:+18018504977">+1(801)850-4977</a>
          </li>
          <li>
            <a href="https://github.com/ace-as-sin">github.com/ace-as-sin</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/blake-trapnell-0b526495/">
              https://www.linkedin.com/in/blake-trapnell-0b526495/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
