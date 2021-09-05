import React from "react";
import styled from "styled-components";
import square from "../../assets/HeroSection1/square.svg";
import apple from "../../assets/HeroSection1/apple.svg";
import facebook from "../../assets/HeroSection1/facebook.svg";
import airbnb from "../../assets/HeroSection1/airbnb.svg";
import google from "../../assets/HeroSection1/google.svg";
import amazon from "../../assets/HeroSection1/amazon.svg";

const Sponsors = () => {
  return (
    <Wrapper>
      <IconsHolder>
        <LeftSection>
          <Items>
            <ItemImg src={square} />
          </Items>
          <Items>
            <ItemImg src={apple} />
          </Items>
          <Items>
            <ItemImg src={facebook} />
          </Items>
        </LeftSection>
        <RightSection>
          <IconHolder>
            <Icons src={airbnb} />
          </IconHolder>
          <IconHolder>
            <Icons src={google} />
          </IconHolder>
          <IconHolder>
            <Icons src={amazon} />
          </IconHolder>
        </RightSection>
      </IconsHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 150px 0;
  z-index: 99999;

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
    margin: 50px 0;
  }
`;
const IconsHolder = styled.div`
  max-width: 1025px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media only screen and (max-width: 550px) {
    gap: 0;
  }
`;
const IconHolder = styled.div`
display: flex;
align-items: center;
    justify-content: center;
    
}`;
const RightSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
`;
const Items = styled.div`
 display: flex;
align-items: center;
    justify-content: center;
   
}`;
const ItemImg = styled.img`
  margin: 0 5px 0;
  max-width: 100%;
  @media only screen and (max-width: 550px) {
    margin: 0 5px 0;
    width: auto;
  }
`;
const Icons = styled.img`
  max-width: 100%;
  @media only screen and (max-width: 550px) {
    margin: 0 5px 0;
    width: 80%;
  }
`;
export default Sponsors;
