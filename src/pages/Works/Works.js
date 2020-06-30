import React from "react";
import { useSpring, animated } from "react-spring";
import Hero from "../../components/Hero/Hero";
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import lightBulb from "../../assets/images/background3.jpg";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardGroup,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
} from "mdbreact";

const Styles = styled.div`
  .card {
    margin-left: 3rem;
    width: 150px;
    height: auto;
    margin-right: 3rem;
  }
  .title {
    background: transparent;
  }

  .jumbo {
    background: url(${lightBulb}) no-repeat center top;
    background-size: cover;
    color: #efefef;
    min-height: 100%;
    min-width: 100%;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  @media screen and (max-width: 1024px) {
    /* Specific to this particular image */
    img.bg {
      left: 50%;
      margin-left: -512px; /* 50% */
    }
  }
`;

function Works(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <animated.div style={style}>
          <Hero
            title={props.title}
            subTitle={props.subTitle}
            text={props.text}
          />
          <MDBCardGroup>
            <MDBCard className="card">
              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt="MDBCard image cap"
                top
                hover
                overlay="white-slight"
              />
              <MDBCardBody>
                <MDBCardTitle tag="h5" className="title">
                  Panel title
                </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="card">
              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                alt="MDBCard image cap"
                top
                hover
                overlay="white-slight"
              />
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="card">
              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg"
                alt="MDBCard image cap"
                top
                hover
                overlay="white-slight"
              />
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
        </animated.div>
      </Jumbo>
    </Styles>
  );
}

export default Works;
