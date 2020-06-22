import React from "react";
import { useSpring, animated } from "react-spring";

function About(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={style}>
      <p>test</p>
    </animated.div>
  );
}

export default About;
