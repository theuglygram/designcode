import React from "react";
import styled from "styled-components";
import ReactJsCard from "../cards/ReactJsCard";
import BottomCard from "./tutorialcards/BottomCard";

const HeroSection3 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <ReactJsCard />
        <BottomCard />
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 100px 0 0;
`;
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
export default HeroSection3;
