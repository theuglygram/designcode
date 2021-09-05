import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import book from "../../../assets/HeroSection1/book.svg";
import reactImg from "../../../assets/HeroSection1/reactImg.svg";
import { LargeText } from "../../../styles/GobalStyles";

function ReactCard() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Feat>FEATURED COURSE</Feat>
        <Build>
          <Swift> React </Swift> for designers
        </Build>
        <Description>
          Learn colors, spacing, visual hiearchy. Just enough design to be
          dangerous.
        </Description>
        <Link to="/courses">
          <Button>
            <Img src={book} /> Start Course
          </Button>
        </Link>
      </ContentWrapper>
      <ReactIcon src={reactImg} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  width: 336px;
  height: 380px;
  background: rgba(63, 32, 32, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 40px;
  @media only screen and (max-width: 360px) {
    width: 280px;
  }
`;
const ContentWrapper = styled.div`
  padding: 30px;
  @media only screen and (max-width: 360px) {
    padding: 15px;
  }
`;
const Feat = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: #ffb68f;
  margin: 20px 0;
`;
const Build = styled(LargeText)`
  color: #fff;
  text-align: unset;
  font-size: 40px;
  line-height: 48px;
  margin: 0 0 20px;
`;
const Swift = styled.span`
  color: #ffb68f; ;
`;
const Description = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin: 0 0 20px;
`;
const Button = styled.button`
  width: 218px;
  height: 54px;
  background: #ffb68f;
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
  margin: 0 0 20px;
  @media only screen and (max-width: 650px) {
    text-align: center;
    margin: 0 auto;
  }
`;
const Img = styled.img`
  margin: 0 10px 0;
`;
const ReactIcon = styled.img`
  position: absolute;
  right: 30px;
  top: 35px;
`;
export default ReactCard;
