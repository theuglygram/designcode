import React from "react";
import styled from "styled-components";
import cert from "../assets/HeroSection1/cert.svg";
import billing from "../assets/HeroSection1/billing.svg";
import sign from "../assets/HeroSection1/sign.svg";
import profile from "../assets/HeroSection1/profile.svg";
import { ClassLink, SmallText } from "../styles/GobalStyles";
import { Link } from "react-router-dom";

const RIghtNavigation = ({ tog }) => {
  return (
    <Wrapper tog={tog}>
      <NavContent>
        <LinksHolder>
          <NavStart>
            <SmallHold>
              <SmallLogo src={profile} />
            </SmallHold>

            <Progress>
              <SmallPro></SmallPro>
            </Progress>
          </NavStart>
          <NavLinks>
            <SmallLogo src={cert} />
            <Links>
              <Link to="/">Certificates</Link>
            </Links>
          </NavLinks>
          <NavLinks>
            <SmallLogo src={billing} />
            <Links>
              <Link to="/">Billing</Link>
            </Links>
          </NavLinks>
          <NavLinks>
            <SmallLogo src={profile} />
            <Links>
              <Link to="/">Profile</Link>
            </Links>
          </NavLinks>
          <NavLinks>
            <SmallLogo src={sign} />
            <Links>
              <Link to="/SignUp">Sign Up</Link>
            </Links>
          </NavLinks>
        </LinksHolder>
      </NavContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: block;
  z-index: 99999;
  opacity: ${(props) => (props.tog ? 1 : 0)};
  transition: 2s ease-out;
  visibility: ${(props) => (props.tog ? "visible" : "hidden")};
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;
const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const NavStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
const Progress = styled.div`
  margin: 10px 0;
  height: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100%;
`;
const SmallPro = styled.div`
  height: 100%;
  background: #00cffd;
  border: 0.360963px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: 70%;
`;
const SmallHold = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #000;
  text-align: center;
  padding: 2px;
`;

const LinksHolder = styled.div`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 240px;
  height: 298px;
  right: -100px;
  top: 0;
  background: rgba(63, 32, 32, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 30px;

  a {
    color: #fff;
  }
`;
const NavLinks = styled(ClassLink)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0000002b;
  padding-bottom: 10px;
  :nth-child(5) {
    border-bottom: unset;
  }
`;
const SmallLogo = styled.img`
  margin-right: 10px;
`;
const Links = styled(SmallText)`
  :hover {
    cursor: pointer;
  }
`;
export default RIghtNavigation;
