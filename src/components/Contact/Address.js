import React from 'react';
import './Address.css';

export default function Address() {
  return (
    <div>
       <section className="split">
              <div className="contact-method">
                <span className="email"></span>
                <h3>Email:</h3>
                <a className="email-address" href="/">cinquewebdev@gmail.com</a>
              </div>
              <div className="contact-method">
                <span className="address"></span>
                <h3>Address:</h3>
                <span className="city-country">
                 Lafayette, LA
                 <br />
                 United States of America
                </span>
              </div>
          </section>
    </div>
  )
}
