import React from "react";
import styled from "styled-components";
import laptopBack from "../../assets/HeroSection1/laptopBack.svg";
import Trust from "../cards/Trust";
import UsersCard from "../cards/UsersCard";

const DesignSection = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <DesignWrapper>
          <DesignContent>
            <Learn>LEARN BY DOING</Learn>
            <Desc>What you’ll design</Desc>
            <Description>
              Redesign your existing app or start from scratch as you follow
              along and learn the techniques.
            </Description>
          </DesignContent>
        </DesignWrapper>

        <TeamWrap>
          <TeamWrapper>
            <UsersCard />
            <Trust />
          </TeamWrapper>
        </TeamWrap>
      </PageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 50px 0;
`;
const PageWrapper = styled.div`
  margin: 100px 0;
  height: 100%;
  min-height: 200vh;
  background: url(${laptopBack});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  @media only screen and (max-width: 1024px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 650px) {
    min-height: 150vh;
  }
`;

const DesignWrapper = styled.div``;
const DesignContent = styled.div`
  max-width: 508px;
  height: 314px;
  background: rgba(63, 14, 71, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 40px;
  margin: 0 auto;
  position: relative;
  top: 280px;
  padding: 60px;
  @media only screen and (max-width: 1024px) {
    top: unset;
  }
  @media only screen and (max-width: 650px) {
    max-width: 300px;
    padding: 30px;
  }
`;
const TeamWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1280px;
  margin: 100px auto 0;
  padding: 20px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
const Learn = styled.div`
  color: #ffa3a3;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  margin: 10px 0;
`;
const Desc = styled.div`
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  margin: 10px 0;
  @media only screen and (max-width: 650px) {
    font-size: 30px;
  }
`;
const Description = styled.div`
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  margin: 20px 0;
  @media only screen and (max-width: 650px) {
    font-size: 22px;
  }
`;
export default DesignSection;
