import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

a{
  text-decoration: none;
  ::active{
    border: none;
    outline: none;
  }
  ::focus{
    border: none;
    outline: none;
  }
  ::visited{
    border: none;
    outline: none;
  }
}
`;

export const SmallText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  align-items: center;
  color: #ffffff;
`;
export const SmallTxt = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  color: #ffffff;
`;
export const MidText = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;

  @media only screen and (max-width: 550px) {
    line-height: 1.5;
    text-align: center;
    font-size: 18px;
  }
  @media only screen and (max-width: 380px) {
    line-height: 1.5;
    text-align: center;
    font-size: 18px;
  }
`;

export const ClassLink = styled.a`
  font-size: 1rem;
  font-weight: 700;
  padding: 5px 20px;
  color: #fff;
  text-decoration: none;
  transition: 0.3s ease-in;
`;
export const Desc = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  @media only screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
export const LargeText = styled.h2`
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;
  @media only screen and (max-width: 450px) {
    font-size: 40px;
    line-height: 1.4;
  }
`;
export const MediumText = styled.h2`
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;

  @media only screen and (max-width: 450px) {
    font-size: 35px;
    line-height: 1.4;
  }
`;
