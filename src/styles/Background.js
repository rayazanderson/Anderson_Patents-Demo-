import React from "react";
import styled from "styled-components";

import background from "../assets/images/background2.jpg";

const Background = () => {
  return <Image src={background} alt="background-global" />;
};

export default Background;

const Image = styled.img`
  background-image: url("../assets/images/background2.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  background-size: contain;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
