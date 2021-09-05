import React from "react";
import styled from "styled-components";
import pricingBackground from "../../assets/HeroSection1/pricingBackground.svg";
import FreeCard from "../cards/Join/FreeCard";
import ProCard from "../cards/Join/ProCard";
import TeamCard from "../cards/Join/TeamCard";
import LeftNavigation from "../../NavItems/LeftNavigation";
import RIghtNavigation from "../../NavItems/RIghtNavigation";

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
        <HeroHold>
          <PricingDiv>
            <PricingContent>
              <Pricing>Pricing</Pricing>
              <Description>
                Get access to all our courses, tutorials, downloads and premium
                support.
              </Description>
            </PricingContent>
          </PricingDiv>
          <Month>
            <Monthly>Monthly</Monthly>
            <Annual>Annual</Annual>
            <Save>Save 48%</Save>
          </Month>
          <CardWrap>
            <FreeCard />
            <ProCard />
            <TeamCard />
          </CardWrap>
        </HeroHold>
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
  background: url(${pricingBackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  @media only screen and (max-width: 1024px) {
    padding: 100px 0 0;
    min-height: 90vh;
  }
`;
const HeroHold = styled.div`
  height: auto;
  min-height: 1000px;
`;
// const HeroContent = styled.div`
//   margin: 0 auto;
//   height: 90px;
//   width: 100%;
//   max-width: 460px;
// `;

const Month = styled.div`
  position: relative;
  background: #b5484d;
  border-radius: 22px;
  display: flex;
  justify-content: space-between;
  height: 44px;
  width: 240px;
  border-radius: 22px;
  align-items: center;
  margin: 20px auto;
`;

const Monthly = styled.h4`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 20px;
  background: #fff;
  border-radius: 30px;
  color: #000;
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
  color: #000;
  left: 60%;
  top: 80%;
  background: #f9ad89;
  border-radius: 10px;
  width: 81px;
  height: 22px;
  text-align: center;
`;
const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 100px auto;
  grid-gap: 30px;
  /* min-height: 100vh; */
  height: 100%;

  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    height: 100%;
    grid-gap: 30px;
  }
`;

const PricingDiv = styled.div``;
const PricingContent = styled.div`
  margin: 20px auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 0 20px;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const Pricing = styled.h2`
  color: #fff;
  font-size: 60px;
`;
const Description = styled.h5`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: 20px 0;
`;
export default HeroSection1;
