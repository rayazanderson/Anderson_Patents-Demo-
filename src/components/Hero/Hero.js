import React from "react";
import "../Hero/Hero.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSpring, animated } from "react-spring";
import Carousel from "../Carousel/Carousel";

function Hero(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="a-card-info" style={style}>
      <Jumbotron className="jumbotron-fluid">
        <Container fluid={true}>
          <Row className="justify-content-center">
            <Col md={8} sm={12}>
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
  );
}

export default Hero;
