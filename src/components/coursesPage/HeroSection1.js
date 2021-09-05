import React from "react";
import styled from "styled-components";
import UIback from "../../assets/courses/UIback.svg";
import frame from "../../assets/courses/frame.svg";
import LeftNavigation from "../../NavItems/LeftNavigation";
import RIghtNavigation from "../../NavItems/RIghtNavigation";
import BuildCards from "./coursesCards/BuildCards";
import ReactCard from "./coursesCards/ReactCard";
import UiCard from "./coursesCards/UiCard";

const HeroSection1 = ({ toggle, tog }) => {
  return (
    <Wrapper>
      <HeroHolder>
        <LeftNav>
          <LeftNavigation toggle={toggle} />
        </LeftNav>
        <RightNav>
          <RIghtNavigation tog={tog} />
        </RightNav>
        <HeroContent>
          <BuildCards />
          <CardHolder>
            <UiCard />
            <ReactCard />
          </CardHolder>
        </HeroContent>
      </HeroHolder>
      <FrameHolder>
        <Framer src={frame} />
      </FrameHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;
const LeftNav = styled.div`
  position: absolute;
`;
const RightNav = styled.div`
  position: absolute;
  top: 130px;
  right: 170px;
  z-index: 9999999;
`;

const HeroHolder = styled.div`
  padding: 150px 0 0;
  background: url(${UIback});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 120vh;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    min-height: unset;
    min-height: unset;
  }
`;
const HeroContent = styled.div`
  min-height: 100px;
  height: 100%;
  width: 100%;
  /* max-width: 460px; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  @media only screen and (max-width: 768px) {
    margin: 50px auto;
    padding: 0 20px;
  }
  @media only screen and (max-width: 650px) {
    margin: 50px auto;
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
const FrameHolder = styled.div`
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 330px) {
    /* display: none; */
  }
`;

const Framer = styled.img`
  margin: 50px auto;
`;

export default HeroSection1;
