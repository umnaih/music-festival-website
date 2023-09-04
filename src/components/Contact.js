import React from "react";
import logo from "./images/logo.png";
import "./style.css";
import "./Contect.css";
export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 style={{ color: "white" }}>Contact Us</h1>
        </div>
        <div className="row">
          <h4 style={{ textAlign: "center" }}>
            We would love to hear from you!
          </h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <input type="text" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
      </div>

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
    </>
  );
}
