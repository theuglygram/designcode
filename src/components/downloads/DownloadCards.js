import React from "react";
import styled from "styled-components";
const DownloadCards = () => {
  const firstSection = [
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
      fileSize: "2.3GB",
    },
    {
      title: "SwiftUI Part 3.zip",
      Day: "Modified 1/29/2020, 11:42 AM",
      fileSize: "6.3GB",
    },
    {
      title: "SwiftUI Part 2.zip",
      Day: "Modified 9/2/2020, 2:41 PM",
      fileSize: "4.2GB",
    },
    {
      title: "SwiftUI Part 1.zip",
      Day: "Modified 9/2/2020, 2:22 PM",
      fileSize: "3.3GB",
    },
    {
      title: "Promo Video in AE.zip",
      Day: "Modified 9/2/2020, 2:10 PM",
      fileSize: "5.3GB",
    },
  ];
  const firstSection2 = [
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
  ];

  const secondSection = [
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
  ];
  const secondSection2 = [
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
  ];
  const thirdSection = [
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
  ];
  const thirdSection2 = [
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
    {
      title: "UI Design for developers.zip",
      Day: "Modified 6/18/2020, 8:32 AM",
    },
  ];
  return (
    <Wrapper>
      <CardWrapper>
        <LeftCard>
          <CardOne>
            <Titl>Video files</Titl>
            <Hold>
              {firstSection.map((sec, index) => (
                <SmallWrap>
                  <SvgHolder>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="#F2F6FF"
                      />
                      <path
                        d="M21 23H7C6.45 23 6 22.55 6 22V12C6 11.45 6.45 11 7 11H21C21.55 11 22 11.45 22 12V22C22 22.55 21.55 23 21 23Z"
                        fill="white"
                        stroke="#3913B8"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18 23H10L11 19H17L18 23Z"
                        fill="#2FB8FF"
                        stroke="#3913B8"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26 22V12L22 14V20L26 22Z"
                        fill="#2FB8FF"
                        stroke="#3913B8"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </SvgHolder>

                  <Description key={index}>
                    <Title>{sec.title}</Title>
                    <Day>{sec.Day}</Day>
                  </Description>

                  <Size>{sec.fileSize}</Size>
                </SmallWrap>
              ))}
            </Hold>
          </CardOne>
          <CardOne>
            <Titl>Wallpapers</Titl>
            <Hold>
              {firstSection2.map((sec, index) => (
                <SmallWrap>
                  <SvgHolder>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="#F2F6FF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26 20L21 14L15 22L10 18L6 21V23C6 24.1 6.9 25 8 25H24C25.1 25 26 24.1 26 23V20Z"
                        stroke="#3913B8"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14Z"
                        fill="#2FB8FF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24 25H8C6.9 25 6 24.1 6 23V11C6 9.9 6.9 9 8 9H24C25.1 9 26 9.9 26 11V23C26 24.1 25.1 25 24 25Z"
                        stroke="#3913B8"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </SvgHolder>

                  <Description key={index}>
                    <Title>{sec.title}</Title>
                    <Day>{sec.Day}</Day>
                  </Description>

                  <Size>2.3GB</Size>
                </SmallWrap>
              ))}
            </Hold>
          </CardOne>
        </LeftCard>

        <MiddleCard>
          <CardOne>
            {" "}
            <Titl>ePub files</Titl>
            <Hold>
              {secondSection.map((sec2, index) => (
                <SmallWrap>
                  <SvgHolder>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="#F2F6FF"
                      />
                      <path
                        d="M24 26H10C8.9 26 8 25.1 8 24V8C8 6.9 8.9 6 10 6H24V26Z"
                        fill="white"
                        stroke="#3913B8"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24 26H10C8.9 26 8 25.1 8 24C8 22.9 8.9 22 10 22H24V26Z"
                        fill="#2FB8FF"
                        stroke="#3913B8"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 16H20"
                        stroke="#3913B8"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 12H20"
                        stroke="#3913B8"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </SvgHolder>

                  <Description key={index}>
                    <Title>{sec2.title}</Title>
                    <Day>{sec2.Day}</Day>
                  </Description>

                  <Size>2.3GB</Size>
                </SmallWrap>
              ))}
            </Hold>
          </CardOne>
          <CardOne>
            {" "}
            <Titl>After Effects Promo Videos</Titl>
            <Hold>
              {secondSection2.map((sec2, index) => (
                <SmallWrap>
                  <SvgHolder>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="#1F0040"
                      />
                      <path
                        d="M9.98318 18.3633L9.04685 21.9071C9.02315 22.0019 8.98759 22.0375 8.86907 22.0375H7.12678C7.00826 22.0375 6.98456 22.0019 7.00826 21.8597L10.3743 10.0904C10.4336 9.87707 10.4691 9.71114 10.4928 9.11852C10.4928 9.03556 10.5284 9 10.5876 9H13.0766C13.1596 9 13.1951 9.0237 13.2188 9.11852L16.9879 21.8834C17.0116 21.9782 16.9879 22.0375 16.893 22.0375H14.9374C14.8426 22.0375 14.7833 22.0019 14.7596 21.919L13.7759 18.3633H9.98318ZM13.3137 16.4432C12.9818 15.1276 12.1758 12.2594 11.8795 10.8727H11.8558C11.6069 12.2594 10.9551 14.6061 10.4691 16.4432C10.481 16.4432 13.3137 16.4432 13.3137 16.4432ZM19.6665 17.6522C19.6902 19.2522 20.4487 20.3308 22.2503 20.3308C22.9496 20.3308 23.554 20.2359 24.1822 19.9633C24.2652 19.9278 24.3244 19.9396 24.3244 20.0463V21.5278C24.3244 21.6464 24.2889 21.7056 24.2059 21.7649C23.5777 22.0731 22.7955 22.2153 21.8236 22.2153C18.6946 22.2153 17.5212 19.9041 17.5212 17.3203C17.5212 14.5232 18.9672 12.2357 21.5154 12.2357C24.0992 12.2357 25 14.4046 25 16.1706C25 16.7395 24.9644 17.2018 24.9052 17.427C24.8815 17.5218 24.8459 17.5573 24.7511 17.581C24.5141 17.6166 23.8148 17.664 22.7718 17.664L19.6665 17.6522ZM22.0725 16.0165C22.677 16.0165 22.8903 16.0165 22.9496 15.9928C22.9496 15.9099 22.9733 15.8506 22.9733 15.7913C22.9733 15.1513 22.6651 13.9661 21.4325 13.9661C20.2946 13.9661 19.8087 14.9617 19.6902 16.0165H22.0725Z"
                        fill="#D291FF"
                      />
                    </svg>
                  </SvgHolder>

                  <Description key={index}>
                    <Title>{sec2.title}</Title>
                    <Day>{sec2.Day}</Day>
                  </Description>

                  <Size>2.3GB</Size>
                </SmallWrap>
              ))}
            </Hold>
          </CardOne>
        </MiddleCard>
        <RightCard>
          <CardOne>
            {" "}
            <Titl>Device Mockups</Titl>
            <Hold>
              {thirdSection.map((sec3, index) => (
                <SmallWrap>
                  <SvgHolder>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="black"
                      />
                      <path
                        d="M13.0616 24.7272C14.6514 24.7272 15.9416 23.424 15.9416 21.8181V18.9091H13.0616C11.4719 18.9091 10.1816 20.2123 10.1816 21.8181C10.1816 23.424 11.4719 24.7272 13.0616 24.7272Z"
                        fill="#0ACF83"
                      />
                      <path
                        d="M10.1816 16C10.1816 14.3942 11.4719 13.0909 13.0616 13.0909H15.9416V18.9091H13.0616C11.4719 18.9091 10.1816 17.6058 10.1816 16Z"
                        fill="#A259FF"
                      />
                      <path
                        d="M10.1816 10.1818C10.1816 8.57598 11.4719 7.27271 13.0616 7.27271H15.9416V13.0909H13.0616C11.4719 13.0909 10.1816 11.7876 10.1816 10.1818Z"
                        fill="#F24E1E"
                      />
                      <path
                        d="M15.9419 7.27271H18.8219C20.4117 7.27271 21.7019 8.57598 21.7019 10.1818C21.7019 11.7876 20.4117 13.0909 18.8219 13.0909H15.9419V7.27271Z"
                        fill="#FF7262"
                      />
                      <path
                        d="M21.7019 16C21.7019 17.6058 20.4117 18.9091 18.8219 18.9091C17.2321 18.9091 15.9419 17.6058 15.9419 16C15.9419 14.3942 17.2321 13.0909 18.8219 13.0909C20.4117 13.0909 21.7019 14.3942 21.7019 16Z"
                        fill="#1ABCFE"
                      />
                    </svg>
                  </SvgHolder>

                  <Description key={index}>
                    <Title>{sec3.title}</Title>
                    <Day>{sec3.Day}</Day>
                  </Description>

                  <Size>2.3GB</Size>
                </SmallWrap>
              ))}
            </Hold>
          </CardOne>
          <CardOne>
            {" "}
            <Titl>ePub files</Titl>
            <Hold>
              {thirdSection2.map((sec3, index) => (
                <SmallWrap>
                  <SvgHolder>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="black"
                      />
                      <path
                        d="M13.0616 24.7273C14.6514 24.7273 15.9416 23.424 15.9416 21.8182V18.9091H13.0616C11.4719 18.9091 10.1816 20.2124 10.1816 21.8182C10.1816 23.424 11.4719 24.7273 13.0616 24.7273Z"
                        fill="#0ACF83"
                      />
                      <path
                        d="M10.1816 16C10.1816 14.3942 11.4719 13.0909 13.0616 13.0909H15.9416V18.9091H13.0616C11.4719 18.9091 10.1816 17.6058 10.1816 16Z"
                        fill="#A259FF"
                      />
                      <path
                        d="M10.1816 10.1818C10.1816 8.57598 11.4719 7.27271 13.0616 7.27271H15.9416V13.0909H13.0616C11.4719 13.0909 10.1816 11.7876 10.1816 10.1818Z"
                        fill="#F24E1E"
                      />
                      <path
                        d="M15.9419 7.27271H18.8219C20.4117 7.27271 21.7019 8.57598 21.7019 10.1818C21.7019 11.7876 20.4117 13.0909 18.8219 13.0909H15.9419V7.27271Z"
                        fill="#FF7262"
                      />
                      <path
                        d="M21.7019 16C21.7019 17.6058 20.4117 18.9091 18.8219 18.9091C17.2321 18.9091 15.9419 17.6058 15.9419 16C15.9419 14.3942 17.2321 13.0909 18.8219 13.0909C20.4117 13.0909 21.7019 14.3942 21.7019 16Z"
                        fill="#1ABCFE"
                      />
                    </svg>
                  </SvgHolder>

                  <Description key={index}>
                    <Title>{sec3.title}</Title>
                    <Day>{sec3.Day}</Day>
                  </Description>

                  <Size>2.3GB</Size>
                </SmallWrap>
              ))}
            </Hold>
          </CardOne>
        </RightCard>
      </CardWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const CardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* place-items: center; */
  @media only screen and (max-width: 1055px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
const LeftCard = styled.div``;
const MiddleCard = styled.div``;
const RightCard = styled.div``;
const CardOne = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05),
    0px 20px 40px rgba(92, 103, 153, 0.2);
  border-radius: 30px;
  margin: 60px 0px;
  padding: 25px;
`;
const Titl = styled.h4`
  font-weight: 600;
  margin: 0 20px;
`;
const SmallWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 15px;
`;
const SvgHolder = styled.div``;
const Description = styled.h4``;
const Title = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #3913b8;
  margin: 0 5px;
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
`;
const Day = styled.p`
  font-weight: normal;
  font-size: 13px;
  margin: 0 5px;
`;
const Size = styled.div`
  font-weight: 500;
  font-size: 13px;
  background: #f2f6ff;
  border-radius: 7px;
  padding: 5px;
`;
export default DownloadCards;
