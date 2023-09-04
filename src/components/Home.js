import React from "react";
import logo from "./images/logo.png";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";
import "./style.css";
export default function App() {
  return (
    <div style={{ backgroundColor: "#18181a" }}>
      {/* Home Section */}
      <section id="home">
        <div
          className="container-fluid mx-auto"
          style={{ width: "auto" }}
        ></div>
      </section>

      {/* Our Services */}
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
            <h1>Upcoming Events</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-3">
              <span className="spanDate">25-07</span>
              <div
                className="card mx-auto bg-white"
                style={{ width: "250px", height: "270x" }}
              >
                <img
                  src={card1}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Natalia Mariz</h5>
                  <a
                    href="#"
                    className="btn btn-sm btn-custom"
                    style={{ backgroundColor: "#bd4467" }}
                  >
                    Learn More!
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3">
              <div
                className="card mx-auto bg-white"
                style={{ width: "250px", height: "250x" }}
              >
                <img
                  src={card2}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Roman Kolar</h5>
                  <a
                    href="#"
                    className="btn btn-sm btn-custom"
                    style={{ backgroundColor: "#bd4467" }}
                  >
                    Learn More!
                  </a>
                </div>
              </div>
              <span className="spanDate">28-07</span>
            </div>

            {/* Card 3 */}
            <div className="col-md-3">
              <span className="spanDate">30-07</span>
              <div
                className="card mx-auto bg-white"
                style={{ width: "250px", height: "250x" }}
              >
                <img
                  src={card3}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Martin Jayn</h5>
                  <a
                    href="#"
                    className="btn btn-sm btn-custom"
                    style={{ backgroundColor: "#bd4467" }}
                  >
                    Learn More!
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3">
              <div
                className="card mx-auto bg-white"
                style={{ width: "250px", height: "250x" }}
              >
                {/* Replace 'cardImage4' with the actual image source */}
                <img
                  src={card4}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Fourth Card</h5>
                  <a
                    href="#"
                    className="btn btn-sm btn-custom"
                    style={{ backgroundColor: "#bd4467" }}
                  >
                    Learn More!
                  </a>
                </div>
              </div>
              <span className="spanDate">31-07</span>
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
