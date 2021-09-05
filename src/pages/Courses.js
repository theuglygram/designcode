import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
import HeroSection1 from "../components/coursesPage/HeroSection1";
import IconSection from "../components/home/IconSection";
import HeroSection3 from "../components/home/HeroSection3";
import Instructors from "../components/home/Instructors";
import Sponsors from "../components/home/Sponsors";
import InstructorHero from "../components/home/InstructorHero";
import CardContent from "../components/coursesPage/coursesCards/CardContent";
import DesignSection from "../components/coursesPage/DesignSection";

const Courses = () => {
  useEffect(() => {
    document.title = "Designcode | Courses";
  });
  const [toggle, setToggle] = useState(false);
  const [tog, setTog] = useState(false);
  return (
    <Wrapper>
      <Header setToggle={setToggle} toggle={toggle} setTog={setTog} tog={tog} />
      <HeroSection1 toggle={toggle} tog={tog} />
      <IconSection />
      <HeroSection3 />
      <CardContent />
      <DesignSection />
      <Sponsors />

      <Instructors />
      <InstructorHero />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Courses;
