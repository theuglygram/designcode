import React from "react";
import styled from "styled-components";
import Background from "../../assets/HeroSection1/Background.svg";
import FreeCard from "../cards/Join/FreeCard";
import ProCard from "../cards/Join/ProCard";
import TeamCard from "../cards/Join/TeamCard";
import Footer from "./Footer";

const FinalHerosection = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <HeroHolder>
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
        </HeroHolder>
        <FooterSection>
          <Footer />
        </FooterSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
`;
const HeroWrapper = styled.div`
  background: url(${Background});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: 100%;
`;
const HeroHolder = styled.div`
  height: auto;
  min-height: 1000px;
`;

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
const FooterSection = styled.div`
  height: 100%;
  min-height: 20px;
`;

export default FinalHerosection;
