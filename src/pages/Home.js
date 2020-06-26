import React from "react";
import Hero from "../components/Hero/Hero";
import { useSpring, animated } from "react-spring";
import Jumbotron from "react-bootstrap/Jumbotron";

function Home(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={style}>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text}>
        <Jumbotron></Jumbotron>
      </Hero>
    </animated.div>
  );
}

export default Home;
