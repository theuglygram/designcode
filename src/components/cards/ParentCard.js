import React from "react";
import styled from "styled-components";
import { MidText, SmallTxt } from "../../styles/GobalStyles";

const ParentCard = ({
  bgColor,
  bgImage,
  descTxt,
  vidTxt,
  timeTxt,
  bellIcon,
  loveIcon,
  courseIcon,
  tutorIcon,
}) => {
  return (
    <Wrapper>
      <ImgContent bgColor={bgColor}>
        <MengImg>
          <ImgMeng src={courseIcon} />
          <ImgMeng src={tutorIcon} />
        </MengImg>
        <ImgFile src={bgImage} />
        <Description>
          <DescTxt>{descTxt}</DescTxt>
          <SmallDesc>
            {vidTxt} - {timeTxt}
          </SmallDesc>
          <IconHold>
            <Icon src={bellIcon} />
            <Icon src={loveIcon} />
          </IconHold>
        </Description>
      </ImgContent>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
`;
const ImgContent = styled.div`
  position: relative;
  max-width: 240px;
  height: 399px;
  background: ${(props) => props.bgColor};
  border-radius: 30px;
  display: flex;
  margin: 0 auto;
`;
const ImgFile = styled.img`
  position: absolute;
  left: 45px;
  top: 0px;
`;

const Description = styled.div`
  width: 240px;
  height: 200px;
  left: 0px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  backdrop-filter: blur(40px);
  align-self: flex-end;
  justify-self: flex-end;
  border-radius: 0px 0px 30px 30px;
  text-align: center;
  justify-content: center;
`;
const DescTxt = styled(MidText)`
  font-weight: 700;
  color: #fff;
  margin: 10px 0;
`;
const SmallDesc = styled(SmallTxt)`
  color: #2fb8ff;
  margin: 10px 0;
`;
const IconHold = styled.div``;
const Icon = styled.img`
  margin: 0 5px;
`;
const MengImg = styled.div`
  position: absolute;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  right: 0;
`;
const ImgMeng = styled.img`
  margin: 10px;
`;
export default ParentCard;
