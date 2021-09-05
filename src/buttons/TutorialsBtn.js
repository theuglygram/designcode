import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import compass from "../assets/HeroSection1/compass.svg";

const TutorialsBtn = () => {
  return (
    <Wrapper>
      <CoursesWrapper>
        <Link to="/courses">
          <Browse>
            <BrowseCom src={compass} /> Browse all Courses
          </Browse>
        </Link>
      </CoursesWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const CoursesWrapper = styled.div`
  padding: 20px 0;
`;
const Browse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  width: 230px;
  background: linear-gradient(93.13deg, #d04040 0.48%, #ff9180 100.48%);
  box-shadow: 0px 20px 40px rgba(255, 144, 144, 0.3);
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  :hover {
    box-shadow: 0px 15px 40px rgba(23, 0, 102, 0.3);
  }
`;
const BrowseCom = styled.img`
  margin-right: 10px;
`;
export default TutorialsBtn;
