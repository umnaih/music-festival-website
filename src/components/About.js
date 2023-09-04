import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./images/logo.png";
import team1 from "./images/team1.png";
import team2 from "./images/team2.png";
import team3 from "./images/team3.png";

export default function About() {
  return (
    <div style={{ backgroundColor: "#18181a" }}>
      {/*  About us meesage */}
      <div className="container" style={{ backgroundColor: "#151515" }}>
        <div className="welcome-message mx-auto" style={{ width: "auto" }}>
          <h3>ASL Music Interpretation</h3>
          <p>
            Like all languages, ASL is a means of communication but also a means
            of art expression. With a demand for more inclusive shows and
            videos, ASL music interpreters are working to make this musical art
            form more accessible and more enjoyable.
          </p>

          <h3>How it works</h3>
          <p>
            A uniquely focused group of ASL interpreters specializing in music
            are also championing accessibility, specifically within the music
            and entertainment industries. ASL is an official language with
            precise manual parameters, including hand shape, palm orientation,
            hand location/placement, hand movement and non-manual markers which,
            traditionally, include somewhat limited motion of the shoulders,
            head and face.
          </p>
        </div>
      </div>
      {/*  Our Services */}
      <Link to="/services">
        <div className="ticket-wrapper">
          <div className="ticket">
            <div className="ticket-txt">BOOK</div>
            <div className="ticket-sub-txt">Your Ticket</div>
            <p className="left"></p>
            <div className="tear-line">
              <p className="tear-p"></p>
              <p className="tear-p"></p>
              <p className="tear-p"></p>
              <p className="tear-p"></p>
              <p className="tear-p"></p>
            </div>
          </div>
          <div className="ticket-rip">
            <div className="tear-line">
              <p className="tear-p"></p>
              <p className="tear-p"></p>
              <p className="tear-p"></p>
              <p className="tear-p"></p>
              <p className="tear-p"></p>
            </div>
            <p className="right"></p>
          </div>
        </div>
      </Link>

      {/*  Our Team */}
      <div
        style={{
          backgroundColor: "#151515",
          color: "#e8eddf",
          marginBottom: "40px",
        }}
      >
        <div className="container">
          <div
            className="welcome-message mx-auto"
            style={{ width: "auto", marginBottom: "45px" }}
          >
            <h1>Our Team</h1>
          </div>
        </div>
        <div className="row team-row">
          <div className="col-md-4 col-sm-6 team-wrap">
            <div className="team-member text-center">
              <div className="team-img">
                <img src={team1}></img>
                <div className="overlay">
                  <div className="team-details text-center">
                    <p>
                      certificated ASL Music Interpreter with more than 8 years
                      of experience, performed in many theater and music
                      concerts
                    </p>
                  </div>
                </div>
              </div>
              <h6 className="team-title">ZINA RANAN</h6>
              <span>Zina will interpret form 01-08 till 08-08.</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 team-wrap">
            <div className="team-member text-center">
              <div className="team-img">
                <img src={team2} />
                <div className="overlay">
                  <div className="team-details text-center">
                    <p>
                      certificated ASL Music Interpreter with more than 5 years
                      of experience, performed in many theater and music
                      concerts
                    </p>
                  </div>
                </div>
              </div>
              <h6 className="team-title">MEZI NORA</h6>
              <span>Mezi will interpret form 11-08 till 18-08.</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 team-wrap">
            <div className="team-member text-center">
              <div className="team-img">
                <img src={team3}></img>
                <div className="overlay">
                  <div className="team-details text-center">
                    <p>
                      certificated ASL Music Interpreter with more than 10 years
                      of experience, performed in many theater and music
                      concerts
                    </p>
                  </div>
                </div>
              </div>
              <h6 className="team-title">RAMIA ALAMI</h6>
              <span>Mezi will interpret form 10-08 till 25-08.</span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              {[
                {
                  icon: "fas fa-map-marker-alt",
                  title: "Find us",
                  content: "1256 Maple Street, NE 67890, Oakville",
                },
                {
                  icon: "fas fa-phone",
                  title: "Call us",
                  content: "+90 124 451 566",
                },
                {
                  icon: "far fa-envelope-open",
                  title: "Mail us",
                  content: "mail@info.com",
                },
              ].map((cta, index) => (
                <div className="col-xl-4 col-md-4 mb-30" key={index}>
                  <div className="single-cta">
                    <i className={cta.icon}></i>
                    <div className="cta-text">
                      <h4>{cta.title}</h4>
                      <span>{cta.content}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <div className="logo-container">
                      <a href="index.html">
                        <img src={logo} className="logo" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="footer-text">
                    <p>
                      Join us to see, hear and feel the variety of live music
                      enjoy the visuals and beats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
