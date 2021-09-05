import React from "react";
import styled from "styled-components";
import LargeCard from "./LargeCard";
import LargeCard2 from "./LargeCard2";

const HeroSection3 = () => {
  return (
    <Wrapper>
      <HeroHolder>
        <LargeCard />
        <LargeCard2 />
      </HeroHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroHolder = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin: 50px auto;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export default HeroSection3;
