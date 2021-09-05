import React from "react";
import styled from "styled-components";
import MengInstructorCard from "../cards/MengInstructorCard";
import DanInstructorCard from "../cards/DanInstructorCard";

const InstructorHero = () => {
  return (
    <Wrapper>
      <HeroHolder>
        <MengInstructorCard />
        <DanInstructorCard />
      </HeroHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const HeroHolder = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin: 50px auto;
  padding: 0 20px;
`;
export default InstructorHero;
