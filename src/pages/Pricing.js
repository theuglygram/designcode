import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import styled from "styled-components";
import HeroSection1 from "../components/pricing/HeroSection1";
import Footer from "../components/home/Footer";
import Plans from "../components/pricing/Plans";
import Faq from "../components/pricing/Faq";

const Pricing = () => {
  useEffect(() => {
    document.title = "Designcode | Pricing";
  }, []);
  const [toggle, setToggle] = useState(false);
  const [tog, setTog] = useState(false);
  return (
    <Wrapper>
      <Header setToggle={setToggle} toggle={toggle} setTog={setTog} tog={tog} />
      <HeroSection1 toggle={toggle} tog={tog} />
      <Plans />
      <Faq />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Pricing;
