import React from "react";
import styled from "styled-components";
import FigmaCard from "../cards/FigmaCard";
import ReactJsCard from "../cards/ReactJsCard";
import LargeBackground from "../../assets/HeroSection1/LargeBackground.svg";
import Tutorials from "../courses/Tutorials";
import GetCertificates from "../cards/GetCertificates";
import HeroSection6 from "./HeroSection6";

import HeroSection7 from "./HeroSection7";

const HeroSection5 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <HeroHolder>
          <FigmaCard />
          <ReactJsCard />
          <Tutorials />
        </HeroHolder>
        <GetCertificates />
        <HeroSection6 />
        <HeroSection7 />
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 50px 0;
  position: relative;
  height: 100%;
`;
const HeroWrapper = styled.div`
  min-height: 200vh;
  height: 100%;
  background-image: url(${LargeBackground});
  background-repeat: no-repeat;
  background-position: left;
  @media only screen and (max-width: 1024px) {
    height: auto;
  }
  @media only screen and (max-width: 768px) {
    background-image: none;
  }
`;
const HeroHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 30px;
  @media only screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
export default HeroSection5;
