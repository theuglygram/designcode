import React from "react";
import styled from "styled-components";

import { Desc, MediumText, MidText } from "../../styles/GobalStyles";

const GetDiscounts = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <HeroHolder>
          <TextContent>
            <DescSmall>Save money</DescSmall>
            <Header>Get Discounts</Header>
            <DescLarge>
              We’ve partnered with the biggest design tools on the market to
              help you get started.
            </DescLarge>
          </TextContent>
        </HeroHolder>
      </HeroWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
`;
const HeroWrapper = styled.div``;
const HeroHolder = styled.div``;

const TextContent = styled.div``;
const DescSmall = styled(Desc)`
  text-align: left;
  margin: 15px 0;
`;
const Header = styled(MediumText)`
  text-align: left;
  line-height: 1.4;
  margin: 0 0 10px;
`;
const DescLarge = styled(MidText)`
  text-align: left;

  line-height: 1.5;
`;

export default GetDiscounts;
