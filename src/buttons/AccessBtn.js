import React from "react";
import cart from "../assets/HeroSection1/cart.svg";
import spiral from "../assets/HeroSection1/spiral.svg";
import styled from "styled-components";

const AccessBtn = () => {
  return (
    <>
      <Wrapper>
        <BtnWrapper>
          <ImgContent>
            <Spiral src={spiral} />
            <Cart src={cart} />
          </ImgContent>
          <TextContent>
            <Acc>ACCESS ALL CONTENT</Acc>
            <Price>$19 per month, billed monthly</Price>
          </TextContent>
        </BtnWrapper>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  position: relative;
  @media only screen and (max-width: 450px) {
    margin: 0 0 20px;
  }
`;

const Cart = styled.img``;

const BtnWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 18px;
  width: 295px;
  height: 88px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 20px 40px rgba(23, 0, 102, 0.3);
  border-radius: 30px;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    box-shadow: unset;
  }
`;

const Spiral = styled.img`
  position: absolute;
  top: -16px;
  left: -20px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  ${BtnWrapper}:hover & {
    transform: rotate(30deg) scale(1.1) translate(1px, 1px);
  }
`;
const ImgContent = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: #b699ff;
  box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const TextContent = styled.div`
  margin-left: 20px;
`;
const Acc = styled.h4`
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
const Price = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #595c7b;
`;

export default AccessBtn;
