import React from "react";
import { useSpring, animated } from "react-spring";
import Content from "../../components/Content";
import styled from "styled-components";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import lightBulb from "../../assets/images/background3.jpg";
import Profile from "../About/Profile";
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

  .about {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
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

  h2 {
    font-family: "Abhaya Libre", serif;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    padding-top: 20px;
    color: #dfe6e9;
    display: flex;
  }

  p {
    font-family: "Abhaya Libre", serif;
    font-size: 2rem;
    font-weight: 200;
    margin-right: auto;
    margin-left: auto;
    color: #dfe6e9;
    display: flex;
  }
`;

function About(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <animated.div style={style}>
          <Container className="bg-transparent mr-3">
            <Hero
              title={props.title}
              subTitle={props.subTitle}
              text={props.text}
            />
          </Container>
        </animated.div>
      </Jumbo>
    </Styles>
  );
}

export default About;
