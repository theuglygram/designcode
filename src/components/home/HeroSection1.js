import React from "react";
import styled from "styled-components";
import HeroBackground1 from "../../assets/HeroSection1/HeroBackground1.svg";
import AccessBtn from "../../buttons/AccessBtn";
import LeftNavigation from "../../NavItems/LeftNavigation";
import RIghtNavigation from "../../NavItems/RIghtNavigation";
import { Desc, LargeText } from "../../styles/GobalStyles";

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
          <TextContent>
            <HeadText>
              Design and code <Swift>SwiftUI</Swift> apps
            </HeadText>
            <Description>
              Don’t skip design. Learn design and code, by building real apps,
              collaborate and solving product UI problems.
            </Description>
            <AccessButton>
              <AccessBtn />
            </AccessButton>
            <Month>
              <Monthly>Monthly</Monthly>
              <Annual>Annual</Annual>
              <Save>Save 48%</Save>
            </Month>
          </TextContent>
        </HeroContent>
      </HeroHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
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
  background: url(${HeroBackground1});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 120vh;
  @media only screen and (max-width: 1024px) {
    padding: 100px 0 0;
    min-height: 90vh;
  }
  /*@media only screen and (max-width: 768px) {
    padding: 100px 0 0;
    height: 70vh;
  }
  @media only screen and (max-width: 450px) {
    padding: 50px 0 0;
    height: 80vh;
  } */
`;
const HeroContent = styled.div`
  margin: 0 auto;
  height: 90px;
  width: 100%;
  max-width: 460px;
`;

const TextContent = styled.div``;
const HeadText = styled(LargeText)`
  color: #fff;
  margin: 20px 0;
  @media only screen and (max-width: 450px) {
    padding: 30px 0 0;
  }
`;
const Description = styled(Desc)`
  color: #fff;
  @media only screen and (max-width: 450px) {
    margin: 0;
    padding: 0 20px;
  }
`;
const AccessButton = styled.div`
  margin: 50px 0;
  @media only screen and (max-width: 450px) {
    margin: 40px 0 0 0;
  }
`;
const Swift = styled.span`
  color: #f8a7a2;
`;
const Month = styled.div`
  position: relative;
  background: #491eb8;
  border-radius: 22px;
  display: flex;
  justify-content: space-between;
  height: 44px;
  width: 240px;
  border-radius: 22px;
  align-items: center;
  margin: 0 auto;
`;

const Monthly = styled.h4`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 20px;
  background: #2fb8ff;
  border-radius: 30px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;
const Annual = styled.h4`
  padding: 9px 20px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;
const Save = styled.div`
  position: absolute;
  color: #491eb8;
  left: 60%;
  top: 80%;
  background: #b699ff;
  border-radius: 10px;
  width: 81px;
  height: 22px;
  text-align: center;
`;
export default HeroSection1;
