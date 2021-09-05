import React from "react";
import styled from "styled-components";
import { SmallTxt } from "../../../styles/GobalStyles";

const CardContent = ({
  numb1,
  time1,
  intro1,
  width1,
  desc1,
  numb2,
  time2,
  intro2,
  width2,
  desc2,
  numb3,
  time3,
  intro3,
  width3,
  desc3,
  item,
}) => {
  return (
    <Wrapper>
      <CardHolder>
        <TextWrap>
          <Item>{item}</Item>
          <TextHolder>
            <TextContent>
              <Numb>{numb1}</Numb>
              <Time>{time1}</Time>
              <Intro>{intro1}</Intro>
              <ProGress>
                <Bar width1={width1} />
              </ProGress>
              <Desc>{desc1}</Desc>
            </TextContent>
          </TextHolder>
          <TextHolder>
            <TextContent>
              <Numb>{numb2}</Numb>
              <Time>{time2}</Time>
              <Intro>{intro2}</Intro>
              <ProGress>
                <Bar2 width2={width2} />
              </ProGress>
              <Desc>{desc2}</Desc>
            </TextContent>
          </TextHolder>
          <TextHolder>
            <TextContent>
              <Numb>{numb3}</Numb>
              <Time>{time3}</Time>
              <Intro>{intro3}</Intro>
              <ProGress>
                <Bar3 width3={width3} />
              </ProGress>
              <Desc>{desc3}</Desc>
            </TextContent>
          </TextHolder>
          <Show>Show More</Show>
        </TextWrap>
      </CardHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 auto;
`;
const TextWrap = styled.div`
  margin: 0 auto;
`;
const TextHolder = styled.div`
  position: relative;
  margin: 20px;
  @media only screen and (max-width: 650px) {
    margin: 0 auto;
  }
`;
const CardHolder = styled.div`
  padding: 45px;
  width: 365px;
  height: 500px;
  background: rgba(0, 0, 0, 0.6);
  /* box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25); */
  backdrop-filter: blur(40px);
  border-radius: 30px;
  margin: 0 30px;

  @media only screen and (max-width: 650px) {
    padding: 45px;
    width: 280px;
    height: 500px;
    margin: 0 0 50px;
    box-shadow: unset;
  }
`;

const TextContent = styled.div``;
const Intro = styled(SmallTxt)`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.5;
  margin: 8px 0;
  color: #fff;
`;
const ProGress = styled.div`
  height: 5px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  width: 170px;
`;
const Bar = styled.div`
  background: #fff;
  border: 0.360963px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: ${(props) => props.width1}%;
  height: 5px;
`;
const Bar2 = styled.div`
  background: #fff;
  border: 0.360963px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: ${(props) => props.width2}%;
  height: 5px;
`;
const Bar3 = styled.div`
  background: #fff;
  border: 0.360963px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: ${(props) => props.width3}%;
  height: 5px;
`;
const Desc = styled(SmallTxt)`
  color: #fff;
  margin: 10px 0;
`;
const Numb = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  left: -38px;
  top: -10px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Time = styled.div`
  color: #fff;
  padding: 2px 6px;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 48px;
  height: 20px;
  left: 210px;
  top: -7px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  @media only screen and (max-width: 650px) {
    left: 150px;
  }
`;

const Show = styled.div`
  height: 28px;
  width: 123px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  flex-grow: 0;
  margin: 20px 0px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
`;
const Item = styled.p`
  color: #fff;
`;
export default CardContent;
