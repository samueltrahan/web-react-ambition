import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
    <div>
      <section className="inner-form">
        <div className="inner">
          <section className="form">
            <form>
              <div className="name-email">
              <div className=" name">
                <label htmlFor="name">Name:</label><br />
                <input className="input-field"  type="text" name="name" />
              </div>
              <div className=" email">
                <label htmlFor="email">Email:</label><br />
                <input className="input-field"  type="text" name="email" id="emai"></input>
              </div>
              </div>
              <div className="field">
                <label htmlFor="message">Message:</label><br />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <ul>
                <li>
                  <input className=" send-btn ui inverted teal button" type="submit" value="Send Message"></input>
                </li>
                <li>
                  <input className=" clear-btn ui inverted teal button" type="reset" value="Clear"></input>
                </li>
              </ul>
            </form>
          </section>
        </div>
      </section>
    </div>
    </>
  );
}
