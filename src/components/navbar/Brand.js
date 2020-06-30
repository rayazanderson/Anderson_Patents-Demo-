import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/logo-min.png";

const Brand = () => {
  return <Image src={logo} alt="Company Logo" />;
};

export default Brand;

const Image = styled.img`
  height: 90%;
  margin: auto 0;

  &:hover {
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
