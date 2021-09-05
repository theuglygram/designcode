import React from "react";
import styled from "styled-components";
import UsersCard from "../cards/UsersCard";
import Trust from "../cards/Trust";

const HeroSection7 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <HeroHolder>
          <UsersCard />
          <Trust />
        </HeroHolder>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div``;
const HeroHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1280px;
  margin: 100px auto 0;
  padding: 0 0 50px;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
export default HeroSection7;
