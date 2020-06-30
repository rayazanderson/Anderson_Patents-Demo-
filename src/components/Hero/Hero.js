import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Styles = styled.div`
  h1 {
    font-family: "Abhaya Libre", serif;
    color: #dfe6e9;
  }

  h3 {
    font-family: "Abhaya Libre", serif;
    color: #dfe6e9;
  }
`;

function Hero(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Styles>
      <animated.div className="a-card-info" style={style}>
        <Jumbotron className="bg-transparent jumbotron-fluid mt-3">
          <Container fluid={true}>
            <Row className="justify-content-center d-flex">
              <Col md={8} sm={8}>
                {props.title && (
                  <h1 className="display-2 font-weight-bolder justify-content-center">
                    {props.title}
                  </h1>
                )}
                {props.subTitle && (
                  <h3 className="display-4 font-weight-light">
                    {props.subTitle}
                  </h3>
                )}
                {props.text && (
                  <h3 className="lead font-weight-light">{props.text}</h3>
                )}
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </animated.div>
    </Styles>
  );
}

export default Hero;
