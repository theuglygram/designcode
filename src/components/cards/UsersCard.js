import React from "react";
import styled from "styled-components";
import meng from "../../assets/HeroSection1/meng.svg";
const UsersCard = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <CardHolder>
          <CardContent>
            <ImgHolder>
              <Img src={meng} />
            </ImgHolder>
            <Title>Pablo Stanley</Title>
            <Position>DESIGNER AT LYFT</Position>
            <Description>
              Meng To's book totally changed my design workflow. It even
              inspired me to start design workshops and YouTube tutorials.
            </Description>
          </CardContent>
          <CardContent2>
            <ImgHolder>
              <Img src={meng} />
            </ImgHolder>
            <Title>Liu Yi</Title>
            <Position>FOUNDER OF PRICE TAG</Position>
            <Description>
              Thanks to Design+Code, I improved my design skill and learned to
              do animations for my app Price Tag, a top news app in China.
            </Description>
          </CardContent2>
        </CardHolder>
      </CardWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 0 20px;
`;
const CardWrapper = styled.div``;
const CardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CardContent = styled.div`
  background: rgba(63, 14, 71, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 40px;
  padding: 20px;
`;
const CardContent2 = styled.div`
  background: rgba(63, 14, 71, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 40px;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ImgHolder = styled.div`position`;
const Img = styled.img`
  margin: 5px 0;
`;
const Title = styled.h4`
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  color: #fff;
  margin: 8px 0;
`;
const Position = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #ffa3a3;
`;
const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #ffffff;
`;
export default UsersCard;
