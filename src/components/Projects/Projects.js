import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import regd from "../../Assets/Projects/Student_Sub_Regd.png";
import subregd from "../../Assets/Projects/subregd.png";
import rhynoev from "../../Assets/Projects/Rhyno_EV.png";
import univmngsys from "../../Assets/Projects/Univ_Mng_Sys.png";
import eventapp from "../../Assets/Projects/Event_App.png";
import ATM from "../../Assets/Projects/ATM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={univmngsys}
              isBlog={false}
              title="University Management System"
              description="A Complete Student Enrollment System using HTML CSS JS PHP."
              ghLink="https://github.com/sankalpsahoo07/University_Management_System_using_HTML_CSS_JS_PHP.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ATM}
              isBlog={false}
              title="Banking Management System"
              description="A Complete Banking Management System with ATM Simulation System using JAVA."
              ghLink="https://github.com/sankalpsahoo07/Banking_Management_System_using_JAVA.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rhynoev}
              isBlog={false}
              title="RHYNO EV"
              description="A Complete Electric Vehicle Website using React."
              ghLink="https://github.com/sankalpsahoo07/RHYNO_EV_MAJOR_WEB_DEV_PROJECT_TEACHNOOK_SANKALP.git"
              demoLink="https://rhynoev.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={regd}
              isBlog={false}
              title="Student Subject Registration"
              description="Student Subject Registration Project is a web application using JSP Servlet JDBC MySQL designed to allow students to register for subjects or courses online. This system manages the entire process of subject selection, registration, and management, providing a seamless interface for students, administrators, and educators."
              ghLink="https://github.com/sankalpsahoo07/Student_Subject_Registration_using_JSP-Servlet-JDBC-MySQL.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventapp}
              isBlog={false}
              title="Event Management Android App"
              description="Event Management Android App using Kotlin and Android Studio"
              ghLink="https://github.com/sankalpsahoo07/Event_Management_Android_App.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={subregd}
              isBlog={false}
              title="Student Subject Registration"
              description="A Student Subject Registration Full stack Project is a web application using Angular SpringBoot designed to allow students to register for subjects or courses online. This system manages the entire process of subject selection, registration, and management, providing a seamless interface for students, administrators, and educators."
              ghLink="https://github.com/sankalpsahoo07/Student_Subject_Registration_using_Angular_SpringBoot.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
