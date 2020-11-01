import React from "react";
import "./Banner.css";

export default function Landing() {
  return (
    <>
      <section className="major">
        <div className="landing-heading">
          <header className="banner-heading">
            <h1 className="ambition">Ambition</h1>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                quasi quam sint reprehenderit eius.
              </p>
            </div>
          </header>
        </div>
        <div className="get-started-btn">
        <button id="get-started" className=" ui inverted purple button">Get Started</button>
        </div>
      </section>
    </>
  );
}
