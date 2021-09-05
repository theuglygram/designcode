import React from "react";
import styled from "styled-components";
import { Desc } from "../../styles/GobalStyles";
import iconcode from "../../assets/HeroSection1/iconcode.svg";
import iconpen from "../../assets/HeroSection1/iconpen.svg";
import iconhelp from "../../assets/HeroSection1/iconhelp.svg";

const Courses = () => {
  return (
    <Wrapper>
      <CoursesHolder>
        <CoursesContent>
          <ForDevs>
            <ImgHolder>
              <Img src={iconcode} />
            </ImgHolder>
            <TextHolder>
              <Title>For developers</Title>
              <Description>
                Don’t skip design or animation. Learn the best techniques from a
                designer who codes.
              </Description>
            </TextHolder>
          </ForDevs>
        </CoursesContent>
        <CoursesContent>
          <ForDevs>
            <ImgHolder>
              <Img src={iconpen} />
            </ImgHolder>
            <TextHolder>
              <Title>For designers</Title>
              <Description>
                Learn by building UIs and animations in visual steps, taught
                from a designer’s perspective.
              </Description>
            </TextHolder>
          </ForDevs>
        </CoursesContent>
        <CoursesContent>
          <ForDevs>
            <ImgHolder>
              <Img src={iconhelp} />
            </ImgHolder>
            <TextHolder>
              <Title>For beginners</Title>
              <Description>
                Just started? No problem. Our courses are visual and
                progressive. We try to not overwhelm at first.
              </Description>
            </TextHolder>
          </ForDevs>
        </CoursesContent>
      </CoursesHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const CoursesHolder = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;
const CoursesContent = styled.div`
  background: rgba(88, 105, 255, 0.1);
  backdrop-filter: blur(30px);
  border-radius: 20px;
  min-width: 250px;
  padding: 20px;
`;
const ForDevs = styled.div`
  display: flex;
`;
const ImgHolder = styled.div``;
const Img = styled.img`
  margin: 0 10px 0;
`;
const TextHolder = styled.div``;

const Title = styled(Desc)`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;
const Description = styled(Desc)`
  font-size: 16px;
  text-align: left;
`;

export default Courses;
