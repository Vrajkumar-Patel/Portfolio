import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vrajkumar Patel </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />I am currently pursuing a{" "}
            <span className="purple">Postgraduate Certificate</span> in
            Full-Stack Software Development at Lambton College.
            <br />I hold a <span className="purple">Bachelor’s degree</span> in
            Computer Engineering from SAL Engineering and Technical Institute,
            Ahmedabad, India.
            <br />
            Professionally, I have worked as a{" "}
            <span className="purple">Software Engineer</span> at{" "}
            <span className="purple">Creole Studios</span> for 2+ years.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vrajkumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
