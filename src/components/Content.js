import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`
  .overlay {
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

function Content(props) {
  return (
    <Styles>
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="bg-transparent opacity">{props.children}</Card>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default Content;
