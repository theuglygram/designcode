import React from "react";
import styled from "styled-components";
import GetDiscounts from "../cards/GetDiscounts";
import SpiralCards from "../cards/SpiralCards";

const HeroSection6 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <GetDiscounts />
        <SpiralCards />
      </HeroWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 100px 0 0;
  @media only screen and (max-width: 750px) {
    margin: 50px 0 0;
  }
`;
const HeroWrapper = styled.div`
display: grid;
    grid-template-columns: repeat(2,1fr);
    max-width: 1024px;
    margin: 40px auto;
    gap: 30px;
    
    @media only screen and (max-width: 750px){
         grid-template-columns: 1fr;  
    }
;}`;

export default HeroSection6;
