import React from "react";
import styled from "styled-components";
import downloadBackground from "../../assets/HeroSection1/downloadBackground.svg";
import LeftNavigation from "../../NavItems/LeftNavigation";
import RIghtNavigation from "../../NavItems/RIghtNavigation";
import { LargeText, SmallText } from "../../styles/GobalStyles";
import DownloadCards from "./DownloadCards";

const HeroSection1 = ({ toggle, tog }) => {
  return (
    <Wrapper>
      <HeroHolder>
        <LeftNav>
          <LeftNavigation toggle={toggle} />
        </LeftNav>
        <RightNav>
          <RIghtNavigation tog={tog} />
        </RightNav>
        <HeroContent>
          <LeftTxt>Downloads</LeftTxt>
          <RightTxt>
            Own the content forever and watch our content offline. Start on a
            solid foundation with our collection of icons, illustrations,
            mockups and wallpapers.
          </RightTxt>
        </HeroContent>
        <DownloadCards />
      </HeroHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
const LeftNav = styled.div`
  position: absolute;
  right: 20px;
`;
const RightNav = styled.div`
  position: absolute;
  top: 130px;
  right: 170px;
  z-index: 9999999;
`;
const HeroHolder = styled.div`
  padding: 150px 0 0;
  background: url(${downloadBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 120vh;
  @media only screen and (max-width: 1024px) {
    padding: 100px 0 0;
    min-height: 90vh;
  }
`;
const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin: 0 auto;
  min-height: 120px;
  height: 100%;
  width: 100%;
  max-width: 1080px;
  padding: 0 20px;
  @media only screen and (max-width: 615px) {
    grid-template-columns: 1fr;
  }
`;
const LeftTxt = styled(LargeText)`
  color: #fff;
  @media only screen and (max-width: 615px) {
    text-align: left;
  }
`;
const RightTxt = styled(SmallText)``;
export default HeroSection1;
