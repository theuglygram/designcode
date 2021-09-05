import React from "react";
import styled from "styled-components";
import tutorialsBackground from "../../assets/HeroSection1/tutorialsBackground.svg";
import LeftNavigation from "../../NavItems/LeftNavigation";
import RIghtNavigation from "../../NavItems/RIghtNavigation";
import { LargeText, MidText } from "../../styles/GobalStyles";
import searchicon from "../../assets/HeroSection1/searchicon.svg";
import reactImg from "../../assets/HeroSection1/reactImg.svg";
import figma from "../../assets/HeroSection1/figma.svg";
import framer from "../../assets/HeroSection1/framer.svg";
import webflow from "../../assets/HeroSection1/webflow.svg";
import sketch from "../../assets/HeroSection1/sketch.svg";
import { useState } from "react";

const HeroSection1 = ({ toggle, tog }) => {
  const [message, setMessage] = useState();
  return (
    <Wrapper>
      <HeroHolder>
        <LeftNav>
          <LeftNavigation toggle={toggle} />
        </LeftNav>
        <RightNav>
          <RIghtNavigation tog={tog} />
        </RightNav>
        <ContentHolder>
          <LeftContent>
            <Duration>2 minute tutorials with source files</Duration>
            <LogoHolder>
              <Logo src={reactImg} />
              <Logo src={figma} />
              <Logo src={sketch} />
              <Logo src={webflow} />
              <Logo src={framer} />
            </LogoHolder>
          </LeftContent>
          <RightContent>
            <Description>
              Find the best tips and tricks in bite-size tutorials about
              SwiftUI, React, Figma, Sketch and Framer.
            </Description>
            <InputWrapper>
              <Search src={searchicon} />
              <InputDiv
                equired
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                placeholder="Search Tutorials....."
              ></InputDiv>
            </InputWrapper>
          </RightContent>
        </ContentHolder>
      </HeroHolder>

      {/* <FrameHolder>
        <Framer src={frame} />
      </FrameHolder> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
  background: url(${tutorialsBackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    min-height: unset;
  }
`;

const ContentHolder = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
const LeftContent = styled.div`
  width: 100%;
`;
const Duration = styled(LargeText)`
  font-size: 50px;
  text-align: unset;
  @media only screen and (max-width: 750px) {
    font-size: 35px;
  }
`;
const LogoHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 250px;
  margin: 40px 0 0;
`;
const Logo = styled.img``;
const RightContent = styled.div``;
const Description = styled(MidText)``;
const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 420px;
  height: 44px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(31, 47, 71, 0.25);
  border-radius: 30px;
  margin: 100px 0 0;
  @media only screen and (max-width: 750px) {
    width: 420px;
    margin: 50px 0;
  }
  @media only screen and (max-width: 450px) {
    width: 350px;
    margin: 50px 0;
  }
  @media only screen and (max-width: 360px) {
    width: 300px;
  }
  @media only screen and (max-width: 320px) {
    width: 270px;
  }
`;
const Search = styled.img`
  position: absolute;
  height: 25px;
  width: 25px;
      top: 10px;
    left: 5px;
}
`;
const InputDiv = styled.input`
  outline: none;
  border: none;
  width: 420px;
  height: 44px;
  border-radius: 30px;
  padding-left: 35px;
  font-size: 18px;
  font-weight: 600;
  color: #313131a1;
`;
export default HeroSection1;
