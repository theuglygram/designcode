import React from "react";
import styled from "styled-components";
import CardContent from "./CardContent";
import { longCourse2 } from "../../details/TutorialDetails";

const BottomCard = () => {
  return (
    <Wrapper>
      <CardWrapper>
        {longCourse2.map((course) => (
          <CardContent
            item={course.item}
            numb1={course.numb1}
            time1={course.time1}
            intro1={course.intro1}
            width1={course.width1}
            desc1={course.desc1}
            numb2={course.numb2}
            time2={course.time2}
            intro2={course.intro2}
            width2={course.width2}
            desc2={course.desc2}
            numb3={course.numb3}
            time3={course.time3}
            intro3={course.intro3}
            width3={course.width3}
            desc3={course.desc3}
          />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 320px) {
    display: none;
  }
`;

export default BottomCard;
