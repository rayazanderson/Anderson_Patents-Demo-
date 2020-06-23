import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu.js";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import PortraitIcon from "@material-ui/icons/Portrait";
import MoreIcon from "@material-ui/icons/More";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          {/* <Navbar.Brand>Anderson Patents</Navbar.Brand> */}
          <NavLinks style={linkAnimation}>
            <a href="/">
              <HomeIcon style={{ fontSize: 20 }} />
              Home
            </a>
            <a href="/about">
              <PortraitIcon style={{ fontSize: 20 }} /> About Me
            </a>
            <a href="/works">
              <MoreIcon style={{ fontSize: 20 }} /> My Services
            </a>
            <a href="/contact">
              <EmailIcon style={{ fontSize: 20 }} />
              Contact Me
            </a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #151b54;
  z-index: 5;
  font-size: 1.4rem;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.25);
`;

const FlexContainer = styled.div`
  max-width: 130rem;
  display: flex;
  margin: auto;
  padding: 0 3rem;
  justify-content: space-between;
  height: 8rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    font-family: "Abhaya Libre", serif;
    color: #dfe6e9;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
