import React from "react";
import styled from "styled-components";
import { MediumText, MidText } from "../../styles/GobalStyles";

const HeroSection2 = () => {
  return (
    <Wrapper>
      <HeroHolder>
        <LeftDesc>
          Learn all the best design <Sp>/ </Sp> code tools
        </LeftDesc>
        <RightDesc>
          We focus on industry leading platforms so that you can be prepared for
          your next job. Then we teach all we can about them.
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
const Sp = styled.span`
  color: #b699ff;
`;
const LeftDesc = styled(MediumText)``;
const RightDesc = styled(MidText)`
  line-height: 1.5;
  @media only screen and (max-width: 550px) {
    text-align: left;
  }
`;
export default HeroSection2;
