import React from "react";
import styled from "styled-components";
import TutorialsBtn from "../../buttons/TutorialsBtn";
import { Desc, MediumText, MidText } from "../../styles/GobalStyles";

const Tutorials = () => {
  return (
    <Wrapper>
      <TextHolder>
        <TextWrapper>
          <TextContent>
            <DescSmall>Premium Tutorials</DescSmall>
            <Header>Tutorials to guide you beyond</Header>
            <DescLarge>
              Once you’ve completed the courses, learn from our quick design and
              code tutorials to strengthen your knowledge
            </DescLarge>
            <TutorialsBtn />
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
const DescSmall = styled(Desc)`
  text-align: left;
`;
const Header = styled(MediumText)`
  text-align: left;
  line-height: 1.4;
`;
const DescLarge = styled(MidText)`
  text-align: left;

  line-height: 1.5;
`;

export default Tutorials;
