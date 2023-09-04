import React from "react";
import "./Services.css";
import event1 from "./images/event1.png";
import event2 from "./images/event2.png";
import event3 from "./images/event3.png";
import event4 from "./images/event4.png";
import event5 from "./images/event5.png";
import event6 from "./images/event6.png";
import event7 from "./images/event7.png";
import event8 from "./images/event8.png";
import event9 from "./images/event9.png";
import logo from "./images/logo.png";
import "./style.css";
export default function About() {
  return (
    <div>
      {/* First row*/}
      <div
        className="tickets-row"
        style={{ marginTop: "50px", paddingBottom: "50px" }}
      >
        <div className="ticket-container">
          <div className="widget ticket--flex-column">
            <div className="top--flex-column">
              <div className="bandname -bold"> Smira Alamera</div>

              <img src={event1} style={{ width: "255px", height: "250px" }} />
              <div className="deetz--flex-row-jsb">
                <div className="event--flex-column">
                  <div className="date "> Date:18-08-2023</div>
                  <div className="time -bold">Time :19:00</div>
                </div>
                <div className="price--flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">$ 150-350</div>
                </div>
              </div>
            </div>
            <div
              className="rip"
              style={{
                backgroundColor: "#white",
                color: "#e8eddf",
              }}
            ></div>
            <div className="bottom--flex-row-jsb">
              <div className="barcode"></div>
              <a
                href="#"
                className="btn btn-sm btn-custom"
                style={{ backgroundColor: "#bd4467" }}
              >
                BUY TICKET
              </a>
            </div>
          </div>
        </div>

        <div className="ticket-container">
          <div className="widget ticket--flex-column">
            <div className="top--flex-column">
              <div className="bandname -bold"> Masson Ramzi</div>

              <img src={event2} style={{ width: "255px", height: "250px" }} />
              <div className="deetz--flex-row-jsb">
                <div className="event--flex-column">
                  <div className="date">Date: 04-08-2023</div>
                  <div className="time -bold">Time :19:00</div>
                </div>
                <div className="price--flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">$150-350</div>
                </div>
              </div>
            </div>
            <div
              className="rip"
              style={{
                backgroundColor: "#white",
                color: "#e8eddf",
              }}
            ></div>
            <div className="bottom--flex-row-jsb">
              <div className="barcode"></div>
              <a
                href="#"
                className="btn btn-sm btn-custom"
                style={{ backgroundColor: "#bd4467" }}
              >
                BUY TICKET
              </a>
            </div>
          </div>
        </div>

        <div className="ticket-container">
          <div className="widget ticket--flex-column">
            <div className="top--flex-column">
              <div className="bandname -bold"> A-M-T</div>

              <img src={event3} style={{ width: "255px", height: "250px" }} />
              <div className="deetz--flex-row-jsb">
                <div className="event--flex-column">
                  <div className="date">Date: 14-08-2023</div>
                  <div className="time -bold">Time :19:00</div>
                </div>
                <div className="price--flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">$150-350</div>
                </div>
              </div>
            </div>
            <div
              className="rip"
              style={{
                backgroundColor: "#white",
                color: "#e8eddf",
              }}
            ></div>
            <div className="bottom--flex-row-jsb">
              <div className="barcode"></div>
              <a
                href="#"
                className="btn btn-sm btn-custom"
                style={{ backgroundColor: "#bd4467" }}
              >
                BUY TICKET
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* second row*/}
      <div
        className="tickets-row"
        style={{ marginTop: "50px", paddingBottom: "50px" }}
      >
        <div className="ticket-container">
          <div className="widget ticket--flex-column">
            <div className="top--flex-column">
              <div className="bandname -bold"> Rozana</div>

              <img src={event4} style={{ width: "255px", height: "250px" }} />
              <div className="deetz--flex-row-jsb">
                <div className="event--flex-column">
                  <div className="date">Date: 22-08-2023</div>
                  <div className="time -bold">Time :19:00</div>
                </div>
                <div className="price--flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">$150-350</div>
                </div>
              </div>
            </div>
            <div
              className="rip"
              style={{
                backgroundColor: "#white",
                color: "#e8eddf",
              }}
            ></div>
            <div className="bottom--flex-row-jsb">
              <div className="barcode"></div>
              <a
                href="#"
                className="btn btn-sm btn-custom"
                style={{ backgroundColor: "#bd4467" }}
              >
                BUY TICKET
              </a>
            </div>
          </div>
        </div>

        <div className="ticket-container">
          <div className="widget ticket--flex-column">
            <div className="top--flex-column">
              <div className="bandname -bold"> Rokan Balii</div>

              <img src={event5} style={{ width: "255px", height: "250px" }} />
              <div className="deetz--flex-row-jsb">
                <div className="event--flex-column">
                  <div className="date">Date: 01-08-2023</div>
                  <div className="time -bold">Time :18:00</div>
                </div>
                <div className="price--flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">$150-250</div>
                </div>
              </div>
            </div>
            <div
              className="rip"
              style={{
                backgroundColor: "#white",
                color: "#e8eddf",
              }}
            ></div>
            <div className="bottom--flex-row-jsb">
              <div className="barcode"></div>
              <a
                href="#"
                className="btn btn-sm btn-custom"
                style={{ backgroundColor: "#bd4467" }}
              >
                BUY TICKET
              </a>
            </div>
          </div>
        </div>

        <div className="ticket-container">
          <div className="widget ticket--flex-column">
            <div className="top--flex-column">
              <div className="bandname -bold"> Fati lami</div>

              <img src={event6} style={{ width: "255px", height: "250px" }} />
              <div className="deetz--flex-row-jsb">
                <div className="event--flex-column">
                  <div className="date">Date: 19-08-2023</div>
                  <div className="time -bold">Time :19:00</div>
                </div>
                <div className="price--flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">$150-350</div>
                </div>
              </div>
            </div>
            <div
              className="rip"
              style={{
                backgroundColor: "#white",
                color: "#e8eddf",
              }}
            ></div>
            <div className="bottom--flex-row-jsb">
              <div className="barcode"></div>
              <a
                href="#"
                className="btn btn-sm btn-custom"
                style={{ backgroundColor: "#bd4467" }}
              >
                BUY TICKET
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* thired row*/}
      <div
        className="tickets-row"
        style={{ marginTop: "50px", paddingBottom: "50px" }}
      >
        <div className="ticket-container">
          <div className="widget ticket--flex-column">
            <div className="top--flex-column">
              <div className="bandname -bold"> Katy Mori</div>

              <img src={event7} style={{ width: "255px", height: "250px" }} />
              <div className="deetz--flex-row-jsb">
                <div className="event--flex-column">
                  <div className="date">Date: 08-08-2023</div>
                  <div className="time -bold">Time :19:00</div>
                </div>
                <div className="price--flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">$150-350</div>
                </div>
              </div>
            </div>
            <div
              className="rip"
              style={{
                backgroundColor: "#white",
                color: "#e8eddf",
              }}
            ></div>
            <div className="bottom--flex-row-jsb">
              <div className="barcode"></div>
              <a
                href="#"
                className="btn btn-sm btn-custom"
                style={{ backgroundColor: "#bd4467" }}
              >
                BUY TICKET
              </a>
            </div>
          </div>
        </div>

        <div className="ticket-container">
          <div className="widget ticket--flex-column">
            <div className="top--flex-column">
              <div className="bandname -bold">Rosa Halif</div>

              <img src={event8} style={{ width: "255px", height: "250px" }} />
              <div className="deetz--flex-row-jsb">
                <div className="event--flex-column">
                  <div className="date">Date: 11-08-2023</div>
                  <div className="time -bold">Time :19:00</div>
                </div>
                <div className="price--flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">$150-350</div>
                </div>
              </div>
            </div>
            <div
              className="rip"
              style={{
                backgroundColor: "#white",
                color: "#e8eddf",
              }}
            ></div>
            <div className="bottom--flex-row-jsb">
              <div className="barcode"></div>
              <a
                href="#"
                className="btn btn-sm btn-custom"
                style={{ backgroundColor: "#bd4467" }}
              >
                BUY TICKET
              </a>
            </div>
          </div>
        </div>

        <div className="ticket-container">
          <div className="widget ticket--flex-column">
            <div className="top--flex-column">
              <div className="bandname -bold">
                <span class="CATS">5CATS</span>
              </div>

              <img src={event9} style={{ width: "255px", height: "250px" }} />
              <div className="deetz--flex-row-jsb">
                <div className="event--flex-column">
                  <div className="date">Date: 12-08-2023</div>
                  <div className="time -bold">Time :19:00</div>
                </div>
                <div className="price--flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">$150-350</div>
                </div>
              </div>
            </div>
            <div
              className="rip"
              style={{
                backgroundColor: "#white",
                color: "#e8eddf",
              }}
            ></div>
            <div className="bottom--flex-row-jsb">
              <div className="barcode"></div>
              <a
                href="#"
                className="btn btn-sm btn-custom"
                style={{ backgroundColor: "#bd4467" }}
              >
                BUY TICKET
              </a>
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
