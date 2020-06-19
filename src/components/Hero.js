import React from "react";
import Navbar from "./navbar/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero() {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            <h2>Patents</h2>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
