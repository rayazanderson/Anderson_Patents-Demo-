import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  return (
    <footer className="mt-5">
      <Container>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <CopyrightIcon className="p-1" />
            Raya Anderson 2020
          </Col>
          <Col className="justify-content-end d-flex p=0" md={4}>
            This site was made by Raya Anderson
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
