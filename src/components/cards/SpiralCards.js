import React from "react";
import styled from "styled-components";
import figma from "../../assets/HeroSection1/figma.svg";
import sketch from "../../assets/HeroSection1/sketch.svg";
import framer from "../../assets/HeroSection1/framer.svg";
import AE from "../../assets/HeroSection1/AE.svg";
const SpiralCards = () => {
  return (
    <Wrapper>
      <SpiralWrapper>
        <SpiralHolder>
          <SpiralContent>
            <ImgFile src={figma} />3 months free Figma Pro
          </SpiralContent>
          <SpiralContent>
            <ImgFile src={sketch} />
            20% off sketch
          </SpiralContent>
          <SpiralContent>
            <ImgFile src={framer} />
            20% off framer
          </SpiralContent>
          <SpiralContent>
            <ImgFile src={AE} />
            60% off Adobe
          </SpiralContent>
        </SpiralHolder>
      </SpiralWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow: hidden;
  padding: 20px;
`;
const SpiralWrapper = styled.div``;
const SpiralHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
const SpiralContent = styled.div`
  background: rgba(137, 27, 27, 0.5);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 40px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
`;
const ImgFile = styled.img`
  position: absolute;
  top: -20px;
  left: 30px;
`;
export default SpiralCards;
