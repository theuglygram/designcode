import React from "react";
import styled from "styled-components";
import HeroVector from "../../assets/HeroSection1/HeroVector.svg";
import compass from "../../assets/HeroSection1/compass.svg";
import Separator from "../../assets/HeroSection1/Separator.svg";
import Courses from "../courses/Courses";
import TextSection from "../courses/TextSection";
import { Link } from "react-router-dom";

const HeroSection4 = () => {
  return (
    <Wrapper>
      <HeroHolder>
        <HeroWrapper>
          <CoursesWrapper>
            <Link to="/courses">
              <Browse>
                <BrowseCom src={compass} /> Browse all Courses
              </Browse>
            </Link>
          </CoursesWrapper>
          <CoursesHolder>
            <TextSection />
            <ImageDiv>
              <ImgHold>
                <Img src={Separator} />
              </ImgHold>
            </ImageDiv>
            <Courses />
          </CoursesHolder>
        </HeroWrapper>
      </HeroHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroHolder = styled.div`
  height: auto;
  background-image: url(${HeroVector});
  background-position: right;
  background-repeat: no-repeat;
`;
const HeroWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
const CoursesWrapper = styled.div`
  padding: 60px 0;
`;
const CoursesHolder = styled.div`
  display: grid;
  grid-template-columns: 450px 250px 450px;
  padding: 10px 20px;
  gap: 5px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const Browse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  width: 257px;
  background: linear-gradient(91.96deg, #3913b8 0%, #ba75ff 100%);
  box-shadow: 0px 20px 40px rgba(113, 62, 215, 0.3);
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  margin: 0 auto;
  :hover {
    box-shadow: 0px 15px 40px rgba(23, 0, 102, 0.3);
  }
`;
const BrowseCom = styled.img`
  margin-right: 10px;
`;
const ImageDiv = styled.div`
  align-self: center;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
const Img = styled.img``;
const ImgHold = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 144.5px;
`;
export default HeroSection4;
