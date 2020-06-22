import React from "react";
import styled from "styled-components";
import image from "../../assets/images/anderson-patents.png";

const Profile = () => {
  return <Image src={image} alt="Company Logo" />;
};

export default Profile;

const Image = styled.img`
  height: 90%;
  margin: auto 0;
`;
