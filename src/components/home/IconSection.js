import React from "react";
import styled from "styled-components";
import book from "../../assets/HeroSection1/book.svg";
import love from "../../assets/HeroSection1/love.svg";
import search from "../../assets/HeroSection1/search.svg";
import penlogo from "../../assets/HeroSection1/penlogo.svg";
import reactImg from "../../assets/HeroSection1/reactImg.svg";
import AE from "../../assets/HeroSection1/AE.svg";
import figma from "../../assets/HeroSection1/figma.svg";
import framer from "../../assets/HeroSection1/framer.svg";
import sketch from "../../assets/HeroSection1/sketch.svg";
import webflow from "../../assets/HeroSection1/webflow.svg";

const IconSection = () => {
  return (
    <Wrapper>
      <IconsHolder>
        <LeftSection>
          <Items>
            <ItemImg src={book} /> <NewHold>Newest</NewHold>
          </Items>
          <Items>
            <ItemImg src={love} /> <NewHold>Popular</NewHold>
          </Items>
          <Items>
            <ItemImg src={search} /> Search
          </Items>
        </LeftSection>
        <RightSection>
          <IconHolder>
            <Icons src={penlogo} />
          </IconHolder>

          <IconHolder>
            <Icons src={reactImg} />
          </IconHolder>
          <IconHolder>
            <Icons src={AE} />
          </IconHolder>
          <IconHolder>
            <Icons src={figma} />
          </IconHolder>
          <IconHolder>
            <Icons src={framer} />
          </IconHolder>
          <IconHolder>
            <SepImg>
              <Icons src={sketch} />
            </SepImg>
          </IconHolder>
          <IconHolder>
            <SepImg>
              <Icons src={webflow} />
            </SepImg>
          </IconHolder>
        </RightSection>
      </IconsHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 60px 0;
  overflow: hidden;
`;
const IconsHolder = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media only screen and (max-width: 550px) {
    width: max-content;
    gap: 0;
  }
`;
const IconHolder = styled.div``;
const RightSection = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #3913b8;
  padding: 5px 5px;
  border-radius: 30px;
  color: #3913b8;
  font-weight: 600;
  font-size: 16px;
  margin: 0 10px 0;

  :hover {
    background: #b699ff;
    color: #fff;
    cursor: pointer;
  }
  @media only screen and (max-width: 550px) {
    width: fit-content;
  }
  @media only screen and (max-width: 360px) {
    width: fit-content;
    margin: 0;
  }
`;
const ItemImg = styled.img`
  margin: 0 5px 0;
`;
const Icons = styled.img`
  @media only screen and (max-width: 550px) {
    margin: 0 5px 0;
  }
`;
const NewHold = styled.div`
  @media only screen and (max-width: 360px) {
    display: none;
  }
`;
const SepImg = styled.div`
  @media only screen and (max-width: 360px) {
    display: none;
  }
`;

export default IconSection;
