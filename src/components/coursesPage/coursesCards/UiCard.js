import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import book from "../../../assets/HeroSection1/book.svg";
import penlogo from "../../../assets/HeroSection1/penlogo.svg";
import { LargeText } from "../../../styles/GobalStyles";

function UiCard() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Feat>FEATURED COURSE</Feat>
        <Build>
          <Swift> UI Design</Swift> for developers
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
      <ReactIcon src={penlogo} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  width: 336px;
  height: 380px;
  background: rgba(63, 14, 71, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 40px;

  @media only screen and (max-width: 360px) {
    width: 280px;
    height: 480px;
  }
`;
const ContentWrapper = styled.div`
  padding: 30px;
  /* 
  @media only screen and (max-width: 360px) {
    padding: 15px;
  } */
`;
const Feat = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: #b699ff;
  margin: 20px 0;
`;
const Build = styled(LargeText)`
  color: #fff;
  text-align: unset;
  font-size: 39px;
  line-height: 48px;
  margin: 0 0 20px;
`;
const Swift = styled.span`
  color: #b699ff; ;
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
  background: #b699ff;
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
export default UiCard;
