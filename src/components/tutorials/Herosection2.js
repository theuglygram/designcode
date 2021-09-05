import React from "react";
import styled from "styled-components";
import FigmaCard from "../cards/FigmaCard";
import TopCard from "./tutorialcards/TopCard";

const Herosection2 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <FigmaCard />
        <TopCard />
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div`
  /* max-width: 1200px; */
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 20px;
  overflow-x: hidden;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
export default Herosection2;
