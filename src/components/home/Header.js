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
  const toggleHamburger = () => {
    setToggle(!toggle);
  };
  return (
    <Wrapper>
      <NavContent>
        <Link to="/">
          <LogoHolder>
            <Logo src={logo} />
          </LogoHolder>
        </Link>
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

        <Hamburger onClick={toggleHamburger}>
          <HamMenu1 toggle={toggle} />
          <HamMenu2 toggle={toggle} />
          <HamMenu3 toggle={toggle} />
        </Hamburger>
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

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: none;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;
const HamMenu1 = styled.div`
  width: 30px;
  height: 2px;
  background: grey;
  margin: 1px 2px;
  position: absolute;
  right: 5px;
  top: 10px;
  transform: ${(props) =>
    props.toggle ? "rotate(-45deg) translate(-5px,6px)" : "rotate(0)"};
`;
const HamMenu2 = styled.div`
  width: 25px;
  height: 2px;
  background: grey;
  margin: 1px 2px;
  position: absolute;
  right: 5px;
  top: 18px;
  transition: 0.9s ease-in;
  -o-transition: 0.9s ease-in;
  -moz-transition: 0.9s ease-in;
  display: ${(props) => (props.toggle ? "none" : "flex")};
`;
const HamMenu3 = styled.div`
  height: 2px;
  background: grey;
  position: absolute;
  right: 5px;
  top: 25px;
  margin: 1px 2px;
  width: ${(props) => (props.toggle ? "30px" : "20px")};
  transform: ${(props) =>
    props.toggle ? "rotate(45deg) translate(-5px,-6px)" : "rotate(0)"};
`;
export default Header;
