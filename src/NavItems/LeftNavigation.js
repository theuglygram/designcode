import React from "react";
import styled from "styled-components";
import book from "../assets/HeroSection1/book.svg";
import tutorials from "../assets/HeroSection1/tutorials.svg";
import pricing from "../assets/HeroSection1/pricing.svg";
import downloads from "../assets/HeroSection1/downloads.svg";
import search from "../assets/HeroSection1/search.svg";
import account from "../assets/HeroSection1/account.svg";
import { ClassLink, SmallText } from "../styles/GobalStyles";
import { Link } from "react-router-dom";

const LeftNavigation = ({ toggle }) => {
  return (
    <Wrapper toggle={toggle}>
      <NavContent>
        <LinksHolder>
          <NavLinks>
            <SmallLogo src={book} />{" "}
            <Links>
              <Link to="/Courses">Courses</Link>
            </Links>
          </NavLinks>
          <NavLinks>
            <SmallLogo src={tutorials} />
            <Links>
              <Link to="/Tutorials">Tutorials</Link>
            </Links>
          </NavLinks>
          <NavLinks>
            <SmallLogo src={pricing} />
            <Links>
              <Link to="/Pricing">Pricing</Link>
            </Links>
          </NavLinks>
          <NavLinks>
            <SmallLogo src={downloads} />
            <Links>
              <Link to="/Downloads">Downloads</Link>
            </Links>
          </NavLinks>
          <NavLinks>
            <SmallLogo src={account} />
            <Links>
              <Link to="/">Account</Link>
            </Links>
          </NavLinks>
          <NavLinks>
            <SmallLogo src={search} />
            <Links>
              <Link to="/">Search</Link>
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
  opacity: ${(props) => (props.toggle ? 1 : 0)};
  z-index: 9999999;
  transition: 0.7s ease-in-out;
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;
const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const LinksHolder = styled.div`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 220px;
  height: 349px;
  left: 80px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05),
    0px 20px 40px rgba(92, 103, 153, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 30px;
  transition: 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);

  a {
    color: #000;
  }
`;
const NavLinks = styled(ClassLink)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0000002b;
  padding-bottom: 10px;
  :nth-child(6) {
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
export default LeftNavigation;
