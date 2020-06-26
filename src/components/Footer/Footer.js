import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "../Footer/Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

/* connection list will have favicon to networking sites/buisness sites */

const Footer = () => {
  return (
    <div className="main-footer">
      <Container>
        <Row className="justify-content-center d-flex">
          <Col>
            <h4>Connect to me at:</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">
                  <LinkedInIcon className=" mb-10" style={{ fontSize: 60 }} />
                </a>
                <a href="/">
                  <LinkedInIcon className=" mb-10" style={{ fontSize: 60 }} />
                </a>
                <a href="/">
                  <LinkedInIcon className=" mb-10" style={{ fontSize: 60 }} />
                </a>
                <a href="/">
                  <LinkedInIcon className=" mb-10" style={{ fontSize: 60 }} />
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>My Contacts: </h4>
            <ul className="list-unstyled">
              <li>
                <h5>email: test@test.com</h5>
              </li>
              <li>
                <h5>phone: (555-555-5555)</h5>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="border-top justify-content-between p-2">
          <Col className="p-0" sm>
            <h5>
              {" "}
              <CopyrightIcon className="p-1" />
              {new Date().getFullYear()} Anderson Patents | All rights reserved
              | Terms of Service | Privacy{" "}
            </h5>
          </Col>
          <Col className="justify-content-end d-flex p=0" md={4}>
            This site was made by Raya Anderson
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
