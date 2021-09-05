import React from "react";
import styled from "styled-components";
import tick from "../../../assets/HeroSection1/tick.svg";
import pen2 from "../../../assets/HeroSection1/pen2.svg";
const FreeCard = () => {
  return (
    <Wrapper>
      <>
        <CardHolder>
          <CardFront>
            <DescHolder>
              <Wrap>
                <Basic>BASIC</Basic>
                <Free>FREE</Free>
                <Trial>Trial</Trial>
              </Wrap>
              <Courses>
                <List>
                  <Tick src={tick} />
                  Free courses
                </List>
                <List>
                  <Tick src={tick} /> 5 Premium Videos
                </List>
                <List>
                  <Tick src={tick} />
                  Notify me, Like
                </List>
              </Courses>
              <SignBtn>
                <SignUp>
                  <Ico src={pen2} /> Sign Up
                </SignUp>
              </SignBtn>
            </DescHolder>
          </CardFront>
          <CardBack></CardBack>
        </CardHolder>
      </>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const CardHolder = styled.div`
  min-height: 450px;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBack = styled.div`
  position: absolute;
  width: 360px;
  height: 426px;
  left: 30px;
  top: -15px;
  background: linear-gradient(180deg, #ffb68f 0%, #ff5a3d 100%);
  backdrop-filter: blur(40px);
  border-radius: 0px 60px 60px 60px;
  transform: matrix(0.99, -0.14, 0.15, 0.99, 0, 0);
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const CardFront = styled.div`
  position: absolute;
  width: 360px;
  height: 426px;
  top: 0;
  z-index: 9999999;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 0px 60px 60px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    height: 380px;
    width: 300px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);

    border-radius: 0px 60px 60px 60px;
  }
  @media only screen and (max-width: 780px) {
    width: 240px;
    background: rgba(255, 255, 255, 0.5);
    /* box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25); */
    backdrop-filter: blur(40px);
    border-radius: 0px 60px 60px 60px;
  }
`;

const DescHolder = styled.div``;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  margin: 0 0 50px;
`;
const Basic = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #0e0f25;
`;
const Free = styled.div`
  font-weight: 600;
  font-size: 60px;
  line-height: 72px;
  color: #000000;
`;
const Trial = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #0e0f25;
  opacity: 0.7;
`;
const Courses = styled.div``;
const List = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 0 10px;
`;
const SignBtn = styled.div`
  margin: 25px 0 0;
  text-align: center;
`;
const SignUp = styled.button`
  text-align: center;
  width: 177px;
  height: 54px;
  background: #ffffff;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  border: none;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  transition: 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: scale(0.9);
  }
`;
const Tick = styled.img`
  margin-right: 5px;
`;
const Ico = styled.img`
  width: 10%;
  margin-right: 5px;
`;
export default FreeCard;
