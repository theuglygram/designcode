import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import book from "../../../assets/HeroSection1/book.svg";
import swiftUI from "../../../assets/HeroSection1/swiftUI.svg";
import { LargeText } from "../../../styles/GobalStyles";

function BuildCards() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Feat>FEATURED COURSE</Feat>
        <Build>
          Build an app in <Swift>SwiftUI</Swift>
        </Build>
        <Description>
          Part 1, 2 & 3. Learn SwiftUI from scratch. Over 10 hours of content.
          20 videos.
        </Description>
        <Link to="/courses">
          <Button>
            <Img src={book} /> Start Course
          </Button>
        </Link>
      </ContentWrapper>
      <ReactIcon src={swiftUI} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 665px;
  height: 510px;
  background: rgba(0, 12, 120, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 0px 60px 60px 0px;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ContentWrapper = styled.div`
  width: 58%;
  position: absolute;
  right: 0;
  margin: 50px 48px;
`;
const Feat = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #41afec;
  margin: 20px 0;
`;
const Build = styled(LargeText)`
  color: #fff;
  text-align: unset;
  margin: 0 0 20px;
`;
const Swift = styled.span`
  color: #40b0ef;
`;
const Description = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  margin: 0 0 20px;
  color: #ffffff;
`;
const Button = styled.button`
  width: 218px;
  height: 54px;
  background: #90dbff;
  box-shadow: 0px 20px 40px rgba(144, 219, 255, 0.3);
  border-radius: 30px;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  color: #0e435c;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
`;
const Img = styled.img`
  margin: 0 10px 0;
`;
const ReactIcon = styled.img`
  position: absolute;
  right: 0;
  top: 50px;
`;
export default BuildCards;
