import React from "react";
import styled from "styled-components";
import figma from "../../assets/HeroSection1/figma.svg";
import tuticon from "../../assets/HeroSection1/tuticon.svg";
import tuticon2 from "../../assets/HeroSection1/tuticon2.svg";

const FigmaCard = () => {
  return (
    <Wrapper>
      <CardHolder>
        <CardContent>
          <FigCard>
            <FeatHold>
              <Feat>FEATURED</Feat>
              <FeatImg>
                <Img src={figma} />
              </FeatImg>
            </FeatHold>
            <Title>The Figma Handbook</Title>
            <Desc>
              A comprehensive guide to the best tips and tricks in Figma
            </Desc>
            <Tuts>
              <TutsImg src={tuticon} />
              30 free tutorials
            </Tuts>
            <Tuts>
              <TutsImg src={tuticon2} />
              Videos, PDF, source files
            </Tuts>
          </FigCard>
          <BlackCard></BlackCard>
          <BlueCard></BlueCard>
        </CardContent>
      </CardHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  margin: 0 0 70px;
`;
const CardHolder = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardContent = styled.div`
  position: relative;
`;
const FeatHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Feat = styled.div`
  color: rgba(255, 255, 255, 0.7);
`;
const FeatImg = styled.div``;
const Img = styled.img``;
const Title = styled.h4`
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  margin: 20px 0;
`;
const Desc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin: 20px 0;
`;
const Tuts = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 1.4;
  color: #ffffff;
  margin: 20px 0;
`;
const TutsImg = styled.img`
  margin: 0px 10px 0;
`;
// styling for figma card design
const FigCard = styled.div`
  position: relative;
  width: 300px;
  height: 426px;
  padding: 30px;
  top: 0px;
  background: rgba(53, 53, 53, 0.6);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 0px 60px 60px 60px;
  z-index: 99999999;

  @media only screen and (max-width: 768px) {
    width: 270px;
    background: rgba(53, 53, 53, 0.6);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
  }
`;
const BlackCard = styled.div`
  position: absolute;
  width: 300px;
  height: 426px;
  top: 0.46px;
  background: #000000;
  border-radius: 0px 60px 60px 60px;
  transform: matrix(1, 0.12, 0, 0.99, 0, 0);
  transform-origin: top left;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    width: 270px;

    background: #a259ff;
    border-radius: 0px 60px 60px 60px;
    transform: matrix(1, 0.12, 0, 0.99, 0, 0);
  }
`;
const BlueCard = styled.div`
  position: absolute;
  width: 300px;
  height: 426px;
  top: 0.46px;
  background: #1abcfe;
  border-radius: 60px;
  transform: matrix(1, 0.25, 0, 0.97, 0, 0);
  transform-origin: top left;
  @media only screen and (max-width: 768px) {
    width: 270px;
    background: #1abcfe;
    border-radius: 0px 60px 60px 60px;
  }
`;
export default FigmaCard;
