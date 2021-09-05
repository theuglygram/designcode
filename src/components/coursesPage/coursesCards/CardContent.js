import React from "react";
import styled from "styled-components";
import ParentCard from "../../cards/ParentCard";
import { shortCourse } from "../../details/CourseDetails";

const CardContent = () => {
  return (
    <Wrapper>
      <CardCont>
        {shortCourse.map((course) => (
          <ParentCard
            bgColor={course.bgColor}
            bgImage={course.bgImage}
            descTxt={course.descTxt}
            vidTxt={course.vidTxt}
            timeTxt={course.timeTxt}
            bellIcon={course.bellIcon}
            loveIcon={course.loveIcon}
            courseIcon={course.courseIcon}
            tutorIcon={course.tutorIcon}
          />
        ))}
      </CardCont>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
const CardCont = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 300px;
  gap: 50px;
  grid-gap: 50px;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export default CardContent;
