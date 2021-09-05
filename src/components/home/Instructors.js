import React from "react";
import styled from "styled-components";
import { MediumText, MidText } from "../../styles/GobalStyles";

const Instructors = () => {
  return (
    <Wrapper>
      <HeroHolder>
        <LeftDesc>Meet the Instructors</LeftDesc>
        <RightDesc>
          We all try to be consistent with our way of teaching step-by-step,
          providing source files and prioritizing design in our courses.
        </RightDesc>
      </HeroHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 60px 0;
  padding: 0 20px;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
  @media only screen and (max-width: 550px) {
    margin: 40px 0;
  }
  @media only screen and (max-width: 350px) {
    margin: 100px 0;
  }
`;
const HeroHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1024px;
  margin: 0 auto;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const LeftDesc = styled(MediumText)`
  font-size: 50px;
  @media only screen and (max-width: 750px) {
    font-size: 35px;
  }
`;
const RightDesc = styled(MidText)`
  line-height: 1.5;
  @media only screen and (max-width: 550px) {
    text-align: left;
  }
`;
export default Instructors;
