import React from "react";
import styled from "styled-components";
import image from "../../assets/images/anderson-patents.png";

const Profile = () => {
  return <Image src={image} alt="Company Logo" class="img-fluid" />;
};

export default Profile;

const Image = styled.img`
  margin-top: 50px;
  margin-bottom: 50px;
  padding-left: 20px;
  height: 300px;
  width: 400px;
  text-align: center;
`;
