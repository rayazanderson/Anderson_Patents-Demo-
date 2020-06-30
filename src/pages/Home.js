import React from "react";
import Hero from "../components/Hero/Hero";
import { useSpring, animated } from "react-spring";
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import lightBulb from "../assets/images/background3.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${lightBulb}) no-repeat center top;
    background-size: cover;
    color: #efefef;
    min-height: 100%;
    min-width: 100%;
    width: 700px;
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

function Home(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Styles>
      <Jumbo
        fluid
        className="jumbo"
        style={{
          overflow: "auto",
          height: "inherit",
          display: "block",
          maxWidth: 300,
          marginLeft: 20,
        }}
      >
        <div className="overlay"></div>
        <animated.div style={style}>
          <Hero
            title={props.title}
            subTitle={props.subTitle}
            text={props.text}
          ></Hero>
        </animated.div>
      </Jumbo>
    </Styles>
  );
}

export default Home;
