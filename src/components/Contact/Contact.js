import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="inner">
          <section>
            <form>
              <div className="first-half-field">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
              </div>
              <div className="half-field">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email"></input>
              </div>
              <div className="field">
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <ul>
                <li>
                  <input type="submit" value="Send Message"></input>
                </li>
                <li>
                  <input type="reset" value="Clear"></input>
                </li>
              </ul>
            </form>
          </section>
          <section className="split">
              <div className="contact-method">
                <span className="email"></span>
                <h3>Email:</h3>
                <a href="/">cinquewebdev@gmail.com</a>
              </div>
              <div className="contact-method">
                <span className="address"></span>
                <h3>Address:</h3>
                <span>
                 Lafayette, LA
                 <br />
                 United States of America
                </span>
              </div>
          </section>
        </div>
      </section>
    </>
  );
}
