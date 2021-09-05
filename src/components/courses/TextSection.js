import React from "react";
import styled from "styled-components";
import computer from "../../assets/HeroSection1/computer.svg";
import { Desc, MediumText, MidText } from "../../styles/GobalStyles";

const TextSection = () => {
  return (
    <Wrapper>
      <TextHolder>
        <TextWrapper>
          <TextContent>
            <DescSmall>Why join Design+Code?</DescSmall>
            <Header>Don’t skip design.</Header>
            <DescLarge>
              Most coding courses treat design as an afterthought. Yet, the
              process of making apps require the understanding of both.
            </DescLarge>
            <PcImg src={computer} />
          </TextContent>
        </TextWrapper>
      </TextHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const TextHolder = styled.div``;
const TextWrapper = styled.div``;
const TextContent = styled.div``;
const DescSmall = styled(Desc)``;
const Header = styled(MediumText)`
  text-align: left;
  line-height: 1.4;
`;
const DescLarge = styled(MidText)`
  text-align: left;

  line-height: 1.5;
`;
const PcImg = styled.img``;
export default TextSection;
