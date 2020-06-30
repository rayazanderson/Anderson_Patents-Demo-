import React from "react";
import styled from "styled-components";
import image from "../../assets/images/anderson-patents.png";

const Profile = () => {
  return <Image src={image} alt="Company Logo" class="img-fluid" />;
};

export default Profile;

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 300px;
  display: flex;
`;
