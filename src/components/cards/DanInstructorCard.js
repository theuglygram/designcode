import React from "react";
import styled from "styled-components";
import AvatarMeng from "../../assets/HeroSection1/AvatarMeng.svg";
import heart from "../../assets/HeroSection1/heart.svg";
import bell from "../../assets/HeroSection1/bell.svg";
import twitter from "../../assets/HeroSection1/twitter.svg";
import webflow from "../../assets/HeroSection1/webflow.svg";
import reactImg from "../../assets/HeroSection1/reactImg.svg";

import { SmallTxt } from "../../styles/GobalStyles";

const DanInstructorCard = () => {
  return (
    <Wrapper>
      <CardHolder>
        <CardSection>
          <CardContent>
            <MengImg src={AvatarMeng} />
            <Title>Meng To</Title>
            <Position>Designer and coder</Position>
            <Roles>I teach designers code and developers design.</Roles>
            <LogoIcons>
              <Logo src={bell} />
              <Logo src={heart} />
              <Logo src={twitter} />
            </LogoIcons>
          </CardContent>
        </CardSection>

        {/*-------------------end of card Design-------------- */}

        <TextWrap>
          <TextHolder>
            <TextContent>
              <Numb>
                <NumbImg src={webflow} />
              </Numb>
              <Time>10:08</Time>
              <Intro>UI Design for developers</Intro>
              <ProGress>
                <Bar></Bar>
              </ProGress>
              <Desc>
                Learn the foundations of UI design and start designing an app
                with me.
              </Desc>
            </TextContent>
          </TextHolder>
          <TextHolder>
            <TextContent>
              <Numb>
                <NumbImg src={reactImg} />
              </Numb>
              <Time>08:02</Time>
              <Intro>Layout and Grids</Intro>
              <ProGress>
                <Bar></Bar>
              </ProGress>
              <Desc>
                Get familiar with negative spacing and how to set up your rulers
                and guides.
              </Desc>
            </TextContent>
          </TextHolder>
          <TextHolder>
            <TextContent>
              <Numb>
                <NumbImg src={reactImg} />
              </Numb>
              <Time>11:12</Time>
              <Intro>Colors and Palettes</Intro>
              <ProGress>
                <Bar></Bar>
              </ProGress>
              <Desc>
                Learn the basics of colors and start your color palettes
                basedyour content, logo or mood.
              </Desc>
            </TextContent>
          </TextHolder>
        </TextWrap>
      </CardHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const TextWrap = styled.div``;
const TextHolder = styled.div`
  position: relative;
  margin: 35px 0;
`;
const CardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0px;
  width: 564px;
  height: 410px;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05),
    0px 20px 40px rgba(92, 103, 153, 0.2);
  border-radius: 30px;
`;

const CardSection = styled.div`
  width: 240px;
  height: 410px;
  background: linear-gradient(
    0deg,
    rgba(19, 40, 80, 0.8),
    rgba(19, 40, 80, 0.8)
  );
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardContent = styled.div`
  width: 200px;
  height: 243px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MengImg = styled.img`
  margin: 0 0 10px;
`;
const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin: 0 0 10px;
`;
const Position = styled.p`
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #2fb8ff;
  margin: 0 0 10px;
`;
const Roles = styled.div`
  text-align: center;
  color: #fff;
  line-height: 1.5;
`;

const LogoIcons = styled.div``;
const Logo = styled.img`
  margin: 15px 5px;
`;

const TextContent = styled.div``;
const Intro = styled(SmallTxt)`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.5;
  margin: 8px 0;
  color: #3913b8;
`;
const ProGress = styled.div`
  height: 5px;
  background: #dbe1ff;
  border-radius: 8px;
  width: 170px;
`;
const Bar = styled.div`
  background: #3913b8;
  border: 0.360963px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: 50px;
`;
const Desc = styled(SmallTxt)`
  color: #000;
`;
const Numb = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  left: -38px;

  background: #dbe1ff;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Time = styled.div`
  background: #dbe1ff;
  padding: 2px 6px;
  position: absolute;
  width: 48px;
  height: 20px;
  left: 210px;
  background: #dbe1ff;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const NumbImg = styled.img`
  width: 25px;
  height: 25px;
`;

export default DanInstructorCard;
