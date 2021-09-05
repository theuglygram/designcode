import React from "react";
import styled from "styled-components";

import { Desc, MediumText, MidText } from "../../styles/GobalStyles";

const Trust = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <HeroHolder>
          <TextContent>
            <DescSmall>Trusted by teams</DescSmall>
            <Header>75,000 people</Header>
            <DescLarge>
              Many startups look for designers who code and developers who
              design. They use our courses to help train new hires and expand
              skill sets.
            </DescLarge>
          </TextContent>
        </HeroHolder>
      </HeroWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
  @media only screen and (max-width: 650px) {
    margin: 50px 0 0;
  }
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

export default Trust;
