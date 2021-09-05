import React from "react";
import styled from "styled-components";
import logo from "../../assets/HeroSection1/logo.svg";
import book from "../../assets/HeroSection1/book.svg";
import tutorials from "../../assets/HeroSection1/tutorials.svg";
import pricing from "../../assets/HeroSection1/pricing.svg";
import downloads from "../../assets/HeroSection1/downloads.svg";
import search from "../../assets/HeroSection1/search.svg";
import account from "../../assets/HeroSection1/account.svg";
import { ClassLink, SmallText } from "../../styles/GobalStyles";
import { Link } from "react-router-dom";

const Header = ({ toggle, setToggle, tog, setTog }) => {
  return (
    <Wrapper>
      <NavContent>
        <LogoHolder>
          <Logo src={logo} onClick={() => setToggle(!toggle)} />
        </LogoHolder>
        <LinksHolder>
          <NavLinks>
            <SmallLogo src={book} />
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
            <SmallLogo src={search} />
          </NavLinks>
          <NavLinks>
            <SmallLogo src={account} onClick={() => setTog(!tog)} />
          </NavLinks>
        </LinksHolder>
      </NavContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99999;
`;
const NavContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  padding: 50px 0;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  @media only screen and (max-width: 550px) {
    padding: 30px 20px;
  }
  @media only screen and (max-width: 450px) {
    padding: 30px 20px;
  }
`;
const LogoHolder = styled.div``;
const Logo = styled.img`
  cursor: pointer;
`;
const LinksHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 780px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const NavLinks = styled(ClassLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  :hover {
    background: #f4f8ff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1),
      0px 20px 40px rgba(31, 47, 71, 0.25);
    border-radius: 14px;

    :nth-child(6),
    :nth-child(5):hover {
      background: unset;
      cursor: pointer;
      box-shadow: unset;
      border-radius: unset;
    }
    a {
      color: #000;
    }
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
export default Header;
