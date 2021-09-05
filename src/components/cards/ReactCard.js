import React from "react";
import styled from "styled-components";
import relaxing from "../../assets/HeroSection1/relaxing.svg";
import bell from "../../assets/HeroSection1/bell.svg";
import reactImg from "../../assets/HeroSection1/reactImg.svg";
import meng from "../../assets/HeroSection1/meng.svg";
import heart from "../../assets/HeroSection1/heart.svg";
import { MidText, SmallTxt } from "../../styles/GobalStyles";

const ReactCard = () => {
  return (
    <Wrapper>
      <ImgContent>
        <MengImg>
          <ImgMeng src={reactImg} />
          <ImgMeng src={meng} />
        </MengImg>
        <ImgFile src={relaxing} />
        <Description>
          <DescTxt>React for Designers</DescTxt>
          <SmallDesc>20 videos - 3 hours</SmallDesc>
          <IconHold>
            <Icon src={bell} />
            <Icon src={heart} />
          </IconHold>
        </Description>
      </ImgContent>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const ImgContent = styled.div`
  position: relative;
  width: 240px;
  height: 399px;
  background: #491eb8;
  border-radius: 30px;
  display: flex;
`;
const ImgFile = styled.img`
  position: absolute;
  left: 85px;
  top: 0px;
`;
const Description = styled.div`
  width: 240px;
  height: 200px;
  left: 0px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  align-self: flex-end;
  justify-self: flex-end;
  border-radius: 0px 0px 30px 30px;
  text-align: center;
  justify-content: center;
`;
const DescTxt = styled(MidText)`
  font-weight: 700;
  color: #fff;
  margin: 10px 0;
`;
const SmallDesc = styled(SmallTxt)`
  color: #2fb8ff;
  margin: 10px 0;
`;
const IconHold = styled.div``;
const Icon = styled.img`
  margin: 0 5px;
`;
const MengImg = styled.div`
  position: absolute;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  right: 0;
`;
const ImgMeng = styled.img`
  margin: 10px;
`;
export default ReactCard;
