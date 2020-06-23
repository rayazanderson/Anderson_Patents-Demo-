import React from "react";
import { useSpring, animated } from "react-spring";
import Jumbotron from "react-bootstrap/Jumbotron";

function Works(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={style}>
      <Jumbotron>
        <p>test</p>
      </Jumbotron>
    </animated.div>
  );
}

export default Works;
