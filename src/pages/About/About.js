import React from "react";
import { useSpring, animated } from "react-spring";
import Content from "../../components/Content";
import styled from "styled-components";
import { Jumbotron as Jumbo } from "react-bootstrap";
import lightBulb from "../../assets/images/background3.jpg";

import Hero from "../../components/Hero/Hero";

const Styles = styled.div`
  .jumbo {
    background: url(${lightBulb}) no-repeat center top;
    background-size: cover;
    color: #efefef;
    min-height: 100%;
    min-width: 100%;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
  }
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

  @media screen and (max-width: 1024px) {
    /* Specific to this particular image */
    img.bg {
      left: 50%;
      margin-left: -512px; /* 50% */
    }
  }
`;

function About(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Content>
        </animated.div>
      </Jumbo>
    </Styles>
  );
}

export default About;
