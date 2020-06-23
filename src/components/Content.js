import React from "react";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../pages/About/Profile";

function Content(props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-auto">
        <Col>
          <Profile />
        </Col>
        <Col md={8}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default Content;
