import React from "react";
import styled from "styled-components";

import { SmallTxt } from "../../styles/GobalStyles";
import ReactCard from "../cards/ReactCard";

const LargeCard2 = () => {
  return (
    <Wrapper>
      <CardHolder>
        <ReactCard />
        <TextWrap>
          <TextHolder>
            <TextContent>
              <Numb>1</Numb>
              <Time>10:08</Time>
              <Intro>Introduction to Visual Design</Intro>
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
              <Numb>2</Numb>
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
              <Numb>3</Numb>
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
  margin: 40px 0;
`;
const CardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0px;
  width: fit-content;
  height: 399px;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05),
    0px 20px 40px rgba(92, 103, 153, 0.2);
  border-radius: 30px;
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
  top: -10px;
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
  top: -7px;
  background: #dbe1ff;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default LargeCard2;
