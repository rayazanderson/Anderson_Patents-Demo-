import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CopyrightIcon from "@material-ui/icons/Copyright";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import styled from "styled-components";

const Styles = styled.div`
  .main-footer {
    position: fixed;
    width: 100%;
    padding-top: 1rem;
    background-color: #151b54;
    bottom: 0;
    left: 0;
    box-shadow: 10px 10px 5px 0px rgba(0.25, 0, 0, 0);
    flex-direction: column;
  }

  h6 {
    font-family: "Abhaya Libre", serif;
    color: #fdcb6e;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    font-weight: bold;
    font-size: 25px;
    z-index: 5;
  }

  a {
    font-family: "Abhaya Libre", serif;
    color: #dfe6e9;
    margin: 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    font-size: large;
  }

  h5:hover {
    color: #fdcb6e;
  }

  h5 {
    font-family: "Abhaya Libre", serif;
    color: #dfe6e9;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 13px;
  }

  h7 {
    font-family: "Raleway", sans-serif;
    color: #dfe6e9;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    font-weight: bold;
    z-index: 5;
  }
`;

/* connection list will have favicon to networking sites/buisness sites */

const Footer = () => {
  return (
    <Styles>
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
                {new Date().getFullYear()} Anderson Patents | All rights
                reserved | Terms of Service | Privacy{" "}
              </h7>
            </Col>
            <Col className="justify-content-end d-flex p=0" md={4}>
              <h7>This site was made by Raya Anderson</h7>
            </Col>
          </Row>
        </Container>
      </div>
    </Styles>
  );
};

export default Footer;
