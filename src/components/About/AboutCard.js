import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> SANKALP KUMAR SAHOO </span>
            from <span className="purple"> CUTTACK, INDIA </span>
            {/* <br />
            I am currently employed as a software developer at Juspay. */}
            <br />
            I have completed Master of Computer Applications (MCA) at Centurion University of Technology And Management, Bhubaneswar, Odisha.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SANKALP</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
