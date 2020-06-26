import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "../Footer/Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

/* connection list will have favicon to networking sites/buisness sites */

const Footer = () => {
  return (
    <div className="main-footer">
      <Container>
        <Row className="justify-content-center d-flex">
          <Col>
            <h6 style={{ fontsize: 20 }}>Let's Connect:</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/">
                  <LinkedInIcon className=" mb-10" style={{ fontSize: 30 }} />
                </a>
                <a href="/">
                  <FacebookIcon className=" mb-10" style={{ fontSize: 30 }} />
                </a>
                <a href="/">
                  <TwitterIcon className=" mb-10" style={{ fontSize: 30 }} />
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h6 style={{ fontsize: 20 }}>My Contacts: </h6>
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
            <h7>
              {" "}
              <CopyrightIcon className="p-1" />
              {new Date().getFullYear()} Anderson Patents | All rights reserved
              | Terms of Service | Privacy{" "}
            </h7>
          </Col>
          <Col className="justify-content-end d-flex p=0" md={4}>
            <h7>This site was made by Raya Anderson</h7>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
