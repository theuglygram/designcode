import React from "react";
import styled from "styled-components";
import { Desc, MediumText, MidText } from "../../styles/GobalStyles";
import Certificates from "../../assets/HeroSection1/Certificates.png";

const GetCertificates = () => {
  return (
    <Wrapper>
      <CertWrapper>
        <TextDescription>
          <TextContent>
            <DescSmall>Create a Profile</DescSmall>
            <Header>Get Certificates</Header>
            <DescLarge>
              After passing a test, we’ll award you with an online certificate.
              You can also submit projects as a result of taking our courses.
            </DescLarge>
          </TextContent>
        </TextDescription>
        <CertImg>
          <Cert src={Certificates} />
        </CertImg>
      </CertWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
`;
const CertWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1024px;
  margin: 40px auto;
  gap: 30px;

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
const TextDescription = styled.div``;
const TextContent = styled.div``;
const DescSmall = styled(Desc)`
  text-align: left;
  margin: 15px 0;
`;
const Header = styled(MediumText)`
  text-align: left;
  line-height: 1.4;
  margin: 0 0 10px;
`;
const DescLarge = styled(MidText)`
  text-align: left;

  line-height: 1.5;
`;

const CertImg = styled.div``;
const Cert = styled.img`
  max-width: 100%;

  @media only screen and (max-width: 750px) {
    max-width: 300px;
  }
`;
export default GetCertificates;
