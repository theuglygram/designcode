import React from "react";
import styled from "styled-components";
import tick2 from "../../../assets/HeroSection1/tick2.svg";
import book2 from "../../../assets/HeroSection1/book2.svg";
const ProCard = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <CardHolder>
          <CardFront>
            <DescHolder>
              <Wrap>
                <Basic>PRO</Basic>
                <Free>
                  <Basic>$ </Basic>19
                </Free>
                <Trial>per month, billed monthly</Trial>
              </Wrap>
              <Courses>
                <List>
                  <Tick src={tick2} />
                  All courses and videos
                </List>
                <List>
                  <Tick src={tick2} /> Source files, ePub
                </List>
                <List>
                  <Tick src={tick2} />
                  Certificates, Projects
                </List>
                <List>
                  <Tick src={tick2} />
                  Premium tutorials
                </List>
                <List>
                  <Tick src={tick2} />
                  UI, icons, illustrations
                </List>
                <List>
                  <Tick src={tick2} />
                  Commercial use
                </List>
              </Courses>
              <SignBtn>
                <SignUp>
                  <Ico src={book2} /> Subscribe Now
                </SignUp>
              </SignBtn>
            </DescHolder>
          </CardFront>
          <CardBack></CardBack>
        </CardHolder>
      </CardWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const CardWrapper = styled.div``;
const CardHolder = styled.div`
  min-height: 550px;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBack = styled.div`
  position: absolute;
  width: 380px;
  height: 519px;
  top: 30px;

  background: linear-gradient(180deg, #ffb68f 0%, #ff4b4b 100%),
    rgba(120, 0, 43, 0.5);
  backdrop-filter: blur(40px);
  border-radius: 60px 60px 60px 0px;
  transform: matrix(1, 0.14, 0, 0.99, 0, 0);
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const CardFront = styled.div`
  position: absolute;
  width: 380px;
  min-height: 519px;
  height: 100%;
  top: 0;
  z-index: 9999;
  background: rgba(120, 0, 43, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 60px 60px 60px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    position: absolute;
    width: 300px;
    height: 100%;
    min-height: 450px;
    background: rgba(120, 0, 43, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 60px 60px 60px 0px;
  }
  @media only screen and (max-width: 780px) {
    position: absolute;
    width: 240px;
    height: 486px;
    background: rgba(120, 0, 43, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 60px 60px 60px 0px;
  }
`;

const DescHolder = styled.div``;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  margin: 0 0 20px;
`;
const Basic = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #ffad89;
`;
const Free = styled.p`
  font-weight: 600;
  font-size: 60px;
  line-height: 72px;
  color: #fff;
  display: flex;
  align-items: center;
`;
const Trial = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #ffad89;
  opacity: 0.7;
`;
const Courses = styled.div``;
const List = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 0 10px;
  color: #fff;
`;
const SignBtn = styled.div`
  margin: 25px 0 0;
  text-align: center;
`;
const SignUp = styled.button`
  text-align: center;
  width: 199px;
  height: 54px;
  background: #f9ad89;
  box-shadow: 0px 20px 40px rgba(249, 173, 136, 0.3);
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
export default ProCard;
