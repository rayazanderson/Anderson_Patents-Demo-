import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../pages/About/Profile";

function Content(props) {
  return (
    <Row className="">
      <Col md={4}>
        <Profile />
      </Col>
      <Col md={8}>
        <Card className="bg-transparent">{props.children}</Card>
      </Col>
    </Row>
  );
}

export default Content;
