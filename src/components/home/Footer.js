import React from "react";
import styled from "styled-components";
import Home from "../../assets/footericons/Home.svg";
import account from "../../assets/footericons/account.svg";
import courses from "../../assets/footericons/courses.svg";
import downloads from "../../assets/footericons/downloads.svg";
import Help from "../../assets/footericons/Help.svg";
import pricing from "../../assets/footericons/pricing.svg";
import search from "../../assets/footericons/search.svg";
import tuts from "../../assets/footericons/tuts.svg";

const Footer = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <FooterHolder>
          <Section1>
            <Links>
              <Img src={Home} /> Home
            </Links>
            <Links>
              <Img src={courses} /> Courses
            </Links>
            <Links>
              <Img src={tuts} /> Tutorials
            </Links>
            <Links>
              <Img src={pricing} /> Pricing
            </Links>
          </Section1>
          <Section2>
            <Links>
              <Img src={downloads} /> Downloads
            </Links>
            <Links>
              <Img src={search} /> Search
            </Links>
            <Links>
              <Img src={account} /> Account
            </Links>
            <Links>
              <Img src={Help} /> Help
            </Links>
          </Section2>
          <Section3></Section3>
        </FooterHolder>
      </FooterWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  @media only screen and (max-width: 385px) {
    margin: 100px 0 0;
  }
  @media only screen and (max-width: 360px) {
    margin: 70px 0 0;
  }
`;
const FooterWrapper = styled.div`
  height: 100%;
`;
const FooterHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 0 auto;
  max-width: 960px;
  padding: 50px 20px;
  height: 100%;
`;
const Section1 = styled.div``;
const Links = styled.div`
  margin: 20px 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #a594947d;
  padding-bottom: 15px;
  width: 150px;
  @media only screen and (max-width: 650px) {
    width: auto;
  }
`;
const Img = styled.img`
  margin-right: 15px;
`;
const Section2 = styled.div``;
const Section3 = styled.div``;
export default Footer;
