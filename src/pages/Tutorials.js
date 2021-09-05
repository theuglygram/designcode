import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
import HeroSection1 from "../components/tutorials/HeroSection1";
import Herosection2 from "../components/tutorials/Herosection2";
import HeroSection3 from "../components/tutorials/HeroSection3";
import Footer from "../components/home/Footer";

const Tutorials = () => {
 useEffect(() => {
    document.title = "Designcode | Tutorials";
  }); 
  const [toggle, setToggle] = useState(false);
  const [tog, setTog] = useState(false);
  return (
    <Wrapper>
      <Header setToggle={setToggle} toggle={toggle} setTog={setTog} tog={tog} />
      <HeroSection1 toggle={toggle} tog={tog} />
      <Herosection2 />
      <HeroSection3 />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Tutorials;
