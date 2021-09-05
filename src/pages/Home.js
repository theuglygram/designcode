import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardSections from "../components/home/CardSections";
import Header from "../components/home/Header";
import HeroSection1 from "../components/home/HeroSection1";
import HeroSection2 from "../components/home/HeroSection2";
import HeroSection3 from "../components/home/HeroSection3";
import HeroSection4 from "../components/home/HeroSection4";
import HeroSection5 from "../components/home/HeroSection5";
import IconSection from "../components/home/IconSection";
import Sponsors from "../components/home/Sponsors";
import Instructors from "../components/home/Instructors";
import InstructorHero from "../components/home/InstructorHero";
import JoinSection from "../components/home/JoinSection";
import FinalHerosection from "../components/home/FinalHerosection";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [tog, setTog] = useState(false);

  useEffect(() => {
    document.title = "Designcode | Home";
  });
  return (
    <Wrapper>
      <Header setToggle={setToggle} toggle={toggle} setTog={setTog} tog={tog} />
      <HeroSection1 toggle={toggle} tog={tog} />
      <HeroSection2 />
      <IconSection />
      <HeroSection3 />
      <CardSections />
      <HeroSection4 />
      <HeroSection5 />
      <Sponsors />
      <Instructors />
      <InstructorHero />
      <JoinSection />
      <FinalHerosection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

export default Home;
