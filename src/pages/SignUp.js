import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
import RIghtNavigation from "NavItems/RIghtNavigation";
import LeftNavigation from "NavItems/LeftNavigation";
import signUp from "assets/HeroSection1/signUp.svg";
import signIm from "assets/HeroSection1/signIm.svg";
import logo from "assets/HeroSection1/logo.svg";

const SignUp = () => {
  useEffect(() => {
    document.title = "Designcode | Sign Up";
  }, []);
  const [toggle, setToggle] = useState(false);
  const [tog, setTog] = useState(false);

  const initial = {
    message: "",
    pass: "",
  };
  const [form, setForm] = useState(initial);

  const formSubmit = (e) => {
    e.preventDefault();
    setForm(initial);
  };

  const { message, pass } = form;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Wrapper>
      <Header setToggle={setToggle} toggle={toggle} setTog={setTog} tog={tog} />

      <SignUpWrapper>
        <SignUpWrap>
          <LeftSection>
            <Logo src={logo} />
            <Description>
              <DescImg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="white" />
                  <path
                    d="M18 28C23.5228 28 28 23.5228 28 18C28 12.4772 23.5228 8 18 8C12.4772 8 8 12.4772 8 18C8 23.5228 12.4772 28 18 28Z"
                    fill="#3913B8"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.14 11.4H18.1343H18.1343C17.8732 11.4 17.2141 11.4 16.5043 11.7671L16.5032 11.7677C15.9077 12.0773 15.545 12.4821 15.3578 12.7296C14.675 13.5682 14.4727 14.4973 14.4057 14.9771C14.3599 15.3053 14.5889 15.6085 14.9171 15.6543C15.2453 15.7001 15.5484 15.4711 15.5942 15.1429C15.647 14.7646 15.8034 14.0791 16.2941 13.4803C16.2995 13.4737 16.3048 13.4669 16.31 13.46C16.4251 13.3066 16.6605 13.0386 17.0562 12.8327C17.5009 12.6028 17.9171 12.6 18.14 12.6C18.378 12.6 18.8736 12.6174 19.3857 12.9583C20.0172 13.3853 20.2391 14.0171 20.2794 14.1715C20.2846 14.1915 20.2909 14.2113 20.2982 14.2307C20.3317 14.32 20.5221 14.9421 20.2889 15.666L20.2888 15.666L20.2858 15.6757C20.1583 16.0959 19.964 16.3374 19.6015 16.7878L19.6015 16.7878L19.5749 16.8209C19.1761 17.3035 18.7984 17.6241 18.4552 17.9153L18.4551 17.9154C18.3865 17.9737 18.3192 18.0308 18.2534 18.0878C17.8959 18.3974 17.437 18.8126 17.4105 19.476C17.4101 19.484 17.41 19.492 17.41 19.5V19.5V19.5V19.5001V19.5001V19.5001V19.5001V19.5001V19.5001V19.5001V19.5001V19.5001V19.5001V19.5001V19.5002V19.5002V19.5002V19.5002V19.5002V19.5002V19.5002V19.5003V19.5003V19.5003V19.5003V19.5003V19.5004V19.5004V19.5004V19.5004V19.5005V19.5005V19.5005V19.5005V19.5006V19.5006V19.5006V19.5007V19.5007V19.5008V19.5008V19.5008V19.5009V19.5009V19.501V19.501V19.501V19.5011V19.5011V19.5012V19.5012V19.5013V19.5014V19.5014V19.5015V19.5015V19.5016V19.5017V19.5017V19.5018V19.5019V19.5019V19.502V19.5021V19.5022V19.5022V19.5023V19.5024V19.5025V19.5026V19.5027V19.5027V19.5028V19.5029V19.503V19.5031V19.5032V19.5033V19.5034V19.5035V19.5036V19.5037V19.5039V19.504V19.5041V19.5042V19.5043V19.5045V19.5046V19.5047V19.5048V19.505V19.5051V19.5053V19.5054V19.5055V19.5057V19.5058V19.506V19.5061V19.5063V19.5065V19.5066V19.5068V19.507V19.5071V19.5073V19.5075V19.5077V19.5078V19.508V19.5082V19.5084V19.5086V19.5088V19.509V19.5092V19.5094V19.5096V19.5098V19.51V19.5102V19.5105V19.5107V19.5109V19.5111V19.5114V19.5116V19.5119V19.5121V19.5123V19.5126V19.5129V19.5131V19.5134V19.5136V19.5139V19.5142V19.5144V19.5147V19.515V19.5153V19.5156V19.5159V19.5162V19.5165V19.5168V19.5171V19.5174V19.5177V19.518V19.5183V19.5187V19.519V19.5193V19.5196V19.52V19.5203V19.5207V19.521V19.5214V19.5218V19.5221V19.5225V19.5229V19.5232V19.5236V19.524V19.5244V19.5248V19.5252V19.5256V19.526V19.5264V19.5268V19.5272V19.5276V19.5281V19.5285V19.5289V19.5294V19.5298V19.5303V19.5307V19.5312V19.5317V19.5321V19.5326V19.5331V19.5335V19.534V19.5345V19.535V19.5355V19.536V19.5365V19.537V19.5376V19.5381V19.5386V19.5392V19.5397V19.5402V19.5408V19.5413V19.5419V19.5425V19.543V19.5436V19.5442V19.5448V19.5454V19.5459V19.5465V19.5471V19.5478V19.5484V19.549V19.5496V19.5502V19.5509V19.5515V19.5522V19.5528V19.5535V19.5541V19.5548V19.5555V19.5562V19.5568V19.5575V19.5582V19.5589V19.5596V19.5604V19.5611V19.5618V19.5625V19.5633V19.564V19.5647V19.5655V19.5663V19.567V19.5678V19.5686V19.5694V19.5701V19.5709V19.5717V19.5725V19.5733V19.5742V19.575V19.5758V19.5767V19.5775V19.5783V19.5792V19.5801V19.5809V19.5818V19.5827V19.5836V19.5845V19.5854V19.5863V19.5872V19.5881V19.589V19.5899V19.5909V19.5918V19.5928V19.5937V19.5947V19.5957V19.5966V19.5976V19.5986V19.5996V19.6006V19.6016V19.6026V19.6037V19.6047V19.6057V19.6068V19.6078V19.6089V19.6099V19.611V19.6121V19.6132V19.6143V19.6154V19.6165V19.6176V19.6187V19.6198V19.621V19.6221V19.6232V19.6244V19.6256V19.6267V19.6279V19.6291V19.6303V19.6315V19.6327V19.6339V19.6351V19.6363V19.6376V19.6388V19.6401V19.6413V19.6426V19.6439V19.6452V19.6464V19.6477V19.649V19.6504V19.6517V19.653V19.6543V19.6557V19.657V19.6584V19.6597V19.6611V19.6625V19.6639V19.6653V19.6667V19.6681V19.6695V19.671V19.6724V19.6738V19.6753V19.6767V19.6782V19.6797V19.6812V19.6827V19.6842V19.6857V19.6872V19.6887V19.6903V19.6918V19.6933V19.6949V19.6965V19.6981V19.6996V19.7012V19.7028V19.7044V19.7061V19.7077V19.7093V19.711V19.7126V19.7143V19.7159V19.7176V19.7193V19.721V19.7227V19.7244V19.7261V19.7279V19.7296V19.7314V19.7331V19.7349V19.7367V19.7384V19.7402V19.742V19.7438V19.7457V19.7475V19.7493V19.7512V19.753V19.7549V19.7568V19.7587V19.7606V19.7625V19.7644V19.7663V19.7682V19.7702V19.7721V19.7741V19.776V19.778V19.78V19.782V19.784V19.786V19.788V19.7901V19.7921V19.7942V19.7962V19.7983V19.8004V19.8025V19.8046V19.8067V19.8088V19.8109V19.8131V19.8152V19.8174V19.8195V19.8217V19.8239V19.8261V19.8283V19.8305V19.8327V19.835V19.8372V19.8395V19.8418V19.844V19.8463V19.8486V19.8509V19.8533V19.8556V19.8579V19.8603V19.8626V19.865V19.8674V19.8698V19.8722V19.8746V19.877V19.8794V19.8819V19.8843V19.8868V19.8893V19.8918V19.8942V19.8968V19.8993V19.9018V19.9043V19.9069V19.9094V19.912V19.9146V19.9172V19.9198V19.9224V19.925V19.9277V19.9303V19.933V19.9356V19.9383V19.941V19.9437V19.9464V19.9491V19.9519V19.9546V19.9574V19.9601V19.9629V19.9657V19.9685V19.9713V19.9741V19.977V19.9798V19.9827V19.9855V19.9884V19.9913V19.9942V19.9971V20C17.41 20.3314 17.6786 20.6 18.01 20.6C18.3413 20.6 18.61 20.3314 18.61 20V19.9971V19.9942V19.9913V19.9884V19.9855V19.9827V19.9798V19.977V19.9741V19.9713V19.9685V19.9657V19.9629V19.9601V19.9574V19.9546V19.9519V19.9491V19.9464V19.9437V19.941V19.9383V19.9356V19.933V19.9303V19.9277V19.925V19.9224V19.9198V19.9172V19.9146V19.912V19.9094V19.9069V19.9043V19.9018V19.8993V19.8968V19.8942V19.8918V19.8893V19.8868V19.8843V19.8819V19.8794V19.877V19.8746V19.8722V19.8698V19.8674V19.865V19.8626V19.8603V19.8579V19.8556V19.8533V19.8509V19.8486V19.8463V19.844V19.8418V19.8395V19.8372V19.835V19.8327V19.8305V19.8283V19.8261V19.8239V19.8217V19.8195V19.8174V19.8152V19.8131V19.8109V19.8088V19.8067V19.8046V19.8025V19.8004V19.7983V19.7962V19.7942V19.7921V19.7901V19.788V19.786V19.784V19.782V19.78V19.778V19.776V19.7741V19.7721V19.7702V19.7682V19.7663V19.7644V19.7625V19.7606V19.7587V19.7568V19.7549V19.753V19.7512V19.7493V19.7475V19.7457V19.7438V19.742V19.7402V19.7384V19.7367V19.7349V19.7331V19.7314V19.7296V19.7279V19.7261V19.7244V19.7227V19.721V19.7193V19.7176V19.7159V19.7143V19.7126V19.711V19.7093V19.7077V19.7061V19.7044V19.7028V19.7012V19.6996V19.6981V19.6965V19.6949V19.6933V19.6918V19.6903V19.6887V19.6872V19.6857V19.6842V19.6827V19.6812V19.6797V19.6782V19.6767V19.6753V19.6738V19.6724V19.671V19.6695V19.6681V19.6667V19.6653V19.6639V19.6625V19.6611V19.6597V19.6584V19.657V19.6557V19.6543V19.653V19.6517V19.6504V19.649V19.6477V19.6464V19.6452V19.6439V19.6426V19.6413V19.6401V19.6388V19.6376V19.6363V19.6351V19.6339V19.6327V19.6315V19.6303V19.6291V19.6279V19.6267V19.6256V19.6244V19.6232V19.6221V19.621V19.6198V19.6187V19.6176V19.6165V19.6154V19.6143V19.6132V19.6121V19.611V19.6099V19.6089V19.6078V19.6068V19.6057V19.6047V19.6037V19.6026V19.6016V19.6006V19.5996V19.5986V19.5976V19.5966V19.5957V19.5947V19.5937V19.5928V19.5918V19.5909V19.5899V19.589V19.5881V19.5872V19.5863V19.5854V19.5845V19.5836V19.5827V19.5818V19.5809V19.5801V19.5792V19.5783V19.5775V19.5767V19.5758V19.575V19.5742V19.5733V19.5725V19.5717V19.5709V19.5701V19.5694V19.5686V19.5678V19.567V19.5663V19.5655V19.5647V19.564V19.5633V19.5625V19.5618V19.5611V19.5604V19.5596V19.5589V19.5582V19.5575V19.5568V19.5562V19.5555V19.5548V19.5541V19.5535V19.5528V19.5522V19.5515V19.5509V19.5502V19.5496V19.549V19.5484V19.5478V19.5471V19.5465V19.5459V19.5454V19.5448V19.5442V19.5436V19.543V19.5425V19.5419V19.5413V19.5408V19.5402V19.5397V19.5392V19.5386V19.5381V19.5376V19.537V19.5365V19.536V19.5355V19.535V19.5345V19.534V19.5335V19.5331V19.5326V19.5321V19.5317V19.5312V19.5307V19.5303V19.5298V19.5294V19.5289V19.5285V19.5281V19.5276V19.5272V19.5268V19.5264V19.526V19.5256V19.5252V19.5248V19.5244V19.524V19.5236V19.5232V19.5229V19.5225V19.5221V19.5218V19.5214V19.521V19.5207V19.5203V19.52V19.5196V19.5193V19.519V19.5187V19.5183V19.518V19.5177V19.5174V19.5171V19.5168V19.5165V19.5162V19.5159V19.5156V19.5153V19.5151C18.6158 19.4301 18.6623 19.3212 19.0391 18.9948C19.0938 18.9474 19.1534 18.8969 19.217 18.843L19.2172 18.8429C19.563 18.5502 20.0294 18.1554 20.5027 17.582L20.5027 17.582L20.5075 17.5761L20.5717 17.4964C20.9077 17.0803 21.2358 16.674 21.4326 16.0292C21.7635 14.9972 21.5283 14.1117 21.4327 13.8396C21.3401 13.5068 20.9942 12.5963 20.0557 11.9627L20.0557 11.9627L20.0528 11.9608C19.2455 11.4226 18.4617 11.4 18.14 11.4ZM17.99 23.4C17.6586 23.4 17.39 23.6687 17.39 24C17.39 24.3314 17.6586 24.6 17.99 24.6H18.01C18.3413 24.6 18.61 24.3314 18.61 24C18.61 23.6687 18.3413 23.4 18.01 23.4H17.99Z"
                    fill="#B5CDFB"
                  />
                </svg>
              </DescImg>
              <Txt>Illustration by Mica from Shape.so</Txt>
            </Description>
          </LeftSection>
          <RightSection onSubmit={formSubmit}>
            <TopSection>
              <Title>Sign up</Title>
              <Desc>
                Don’t just learn code. Learn design and code, by building real
                apps, collaborate and solving problems.
              </Desc>
            </TopSection>
            <FormSection>
              <InputWrapper>
                <SvgHolder>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="18" cy="18" r="18" fill="#90DBFF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 16.3999C8.10525 16.3998 8.21187 16.4274 8.3087 16.4855L18 22.3003L27.6913 16.4855C27.7881 16.4274 27.8948 16.3998 28 16.3999V15L18 8L8 15V16.3999ZM28 17.6997L18.3087 23.5145L18 23.6997L17.6913 23.5145L8 17.6997V26C8 27.1 8.9 28 10 28H26C27.1 28 28 27.1 28 26V17.6997Z"
                      fill="#3913B8"
                    />
                    <path
                      d="M8 16.4L18 22.3L28 16.4V15L18 8L8 15V16.4Z"
                      fill="white"
                    />
                  </svg>
                </SvgHolder>
                <InputBox
                  required
                  name="message"
                  value={message}
                  onChange={onChange}
                  id="message"
                  placeholder="Email Address"
                />
              </InputWrapper>
              <InputWrapper>
                <SvgHolder>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="18" cy="18" r="18" fill="#90DBFF" />
                    <path
                      d="M14 18V12C14 9.79 15.79 8 18 8C20.21 8 22 9.79 22 12V18"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 27C12 27.55 12.45 28 13 28H23C23.55 28 24 27.55 24 27V19C24 18.45 23.55 18 23 18H13C12.45 18 12 18.45 12 19V27ZM18.6 24C18.6 23.6686 18.3314 23.4 18 23.4C17.6686 23.4 17.4 23.6686 17.4 24V25C17.4 25.3314 17.6686 25.6 18 25.6C18.3314 25.6 18.6 25.3314 18.6 25V24Z"
                      fill="#3913B8"
                    />
                  </svg>
                </SvgHolder>
                <InputBox
                  required
                  name="pass"
                  value={pass}
                  onChange={onChange}
                  id="password"
                  placeholder="Password"
                  type="password"
                />
              </InputWrapper>
              <SignBtn>Sign Up</SignBtn>
              <TermsDesc>
                By clicking on <Terms>Sign up</Terms>, you agree to our
                <Terms>Terms of Service</Terms>and{" "}
                <Terms>Privacy policy.</Terms>
              </TermsDesc>
            </FormSection>
          </RightSection>
        </SignUpWrap>
      </SignUpWrapper>

      <RightNav>
        <RIghtNavigation tog={tog} />
      </RightNav>
      <LeftNav>
        <LeftNavigation tog={tog} />
      </LeftNav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  background: url(${signUp}),
    linear-gradient(116.82deg, #3913b8 0%, #7573d8 100%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  max-width: 100vw;
  width: 100%;
  /* overflow-x: hidden; */
  /* padding: 0 24px; */
`;

const RightNav = styled.div`
  position: absolute;
  top: 130px;
  right: 170px;
  z-index: 999;
`;
const LeftNav = styled.div`
  position: absolute;
  right: 20px;
`;
const SignUpWrap = styled.div`
  width: 100%;
  max-width: 900px;
  height: 500px;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-gap: 20px;
  background: #ffffff;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  grid-template-columns: 400px auto;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 500px;
  margin: 24px auto 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0 24px;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 650px) {
    margin: 16px auto 0 auto;
  }
`;
const LeftSection = styled.div`
  background: url(${signIm});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
const Logo = styled.img`
  position: absolute;
  right: 50px;
  top: 20px;
`;
const Description = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  display: grid;
  grid-template-columns: 40px auto;
`;
const DescImg = styled.div``;
const RightSection = styled.div`
  max-width: 320px;
  width: 100%;
  padding: 0 20px;
  /* margin: 40px auto; */
`;
const Txt = styled.p`
  font-size: 13px;

  color: #48507b;
`;

const TopSection = styled.div``;
const Title = styled.h4`
  font-weight: bold;
  font-size: 40px;
  margin: 20px 0;
`;
const Desc = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  /* or 19px */

  color: #48507b;
`;

const InputWrapper = styled.div`
  display: flex;
  background: #ffffff;
  border: 1px solid #dbe1ff;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(219, 225, 255, 0.3);
  border-radius: 30px;
  width: 100%;
  margin: 20px 0;
`;
const SvgHolder = styled.div``;
const InputBox = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-radius: 30px;
  background: none;
  font-size: 15px;
  margin: 0 7px 0;
`;
const FormSection = styled.div`
  margin: 40px 0;
`;
const SignBtn = styled.button`
  width: 100%;
  height: 50px;
  background: #90dbff;
  box-shadow: 0px 20px 40px rgba(144, 219, 255, 0.3);
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const TermsDesc = styled.div`
  color: #48507b;
  font-size: 15px;
  margin: 40px 0;
`;
const Terms = styled.span`
  color: #48507b;
  font-size: 15px;
  font-weight: 700;
`;
export default SignUp;
