import HeroSection1 from "components/downloads/HeroSection1";
import Footer from "components/home/Footer";
import Header from "components/home/Header";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Downloads = () => {
  const [toggle, setToggle] = useState(false);
  const [tog, setTog] = useState(false);

  useEffect(() => {
    document.title = "Designcode | Downloads";
  }, []);
  return (
    <Wrapper>
      <Header setToggle={setToggle} toggle={toggle} setTog={setTog} tog={tog} />
      <HeroSection1 toggle={toggle} tog={tog} />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
`;
export default Downloads;
