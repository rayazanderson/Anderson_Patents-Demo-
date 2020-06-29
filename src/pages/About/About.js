import React from "react";
import { useSpring, animated } from "react-spring";
import Content from "../../components/Content";
import "../About/About.css";
import Col from "react-bootstrap/Col";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

import Hero from "../../components/Hero/Hero";

function About(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={style}>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text}>
        {/* <Col md="6" xs={{ order: 4 }}>
        {props.title && (
          <h2 className="display-2 font-weight-bolder">{props.title}</h2>
        )}
      </Col> */}
      </Hero>
      <Content>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Content>
    </animated.div>
  );
}

export default About;
