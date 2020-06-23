import React from "react";
import CardInfo from "../Carousel/CardInfo";
import { useSpring, animated } from "react-spring";

function Card(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div
      className="d-inline-lock a-card"
      onClick={(e) => props.click(props.item)}
      style={style}
    >
      <img
        className="a-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo title={props.item.title} subTitle={props.item.subTitle} />
      )}
    </animated.div>
  );
}

export default Card;
