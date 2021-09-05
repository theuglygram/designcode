import React from "react";
import styled from "styled-components";
import FramerCard from "../cards/FramerCard";
import IosCard from "../cards/IosCard";
import WebflowCard from "../cards/WebflowCard";
import AndroidCard from "../cards/AndroidCard";

const CardSections = () => {
  return (
    <Wrapper>
      <HeroHolder>
        <FramerCard />
        <IosCard />
        <WebflowCard />
        <AndroidCard />
      </HeroHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroHolder = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 60px auto 0;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export default CardSections;
