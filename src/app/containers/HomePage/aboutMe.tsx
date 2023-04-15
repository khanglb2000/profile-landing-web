import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";
import ProfileImg from "../../../assets/images/profile-img.png";

const myCVurl =
  "https://firebasestorage.googleapis.com/v0/b/bird-shop-22ade.appspot.com/o/appImages%2FLAM-BAO-KHANG.pdf?alt=media&token=e66c04ea-4db9-46d5-abe9-d4fb89efb48b";

const AboutMeContainer = styled.div`
  ${tw`
        max-w-full
        flex
        flex-wrap
        items-center
        justify-center
        py-4
        md:px-0
        bg-white
    `};

  @media (max-width: ${SCREENS.md}) {
    max-width: 50vh;
  }
`;

const ImageContainer = styled.div`
  width: auto;
  height: 15em;

  img {
    width: auto;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #1e40af;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 20em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 25em;
    img {
      border: 6px solid #1e40af;
    }
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 30em;
    margin-left: 0;
    img {
      border: 6px solid #1e40af;
    }
  }
`;

const InfoContainer = styled.div`
  ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};

  @media (max-width: ${SCREENS.md}) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        md:text-5xl
        md:font-thin
        md:leading-normal
    `};
`;

const InfoText = styled.p`
  ${tw`
        md:max-w-4xl
        text-base
        md:text-xl
        text-gray-500
        font-normal
        mt-4
    `};
`;

const ButtonsContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        mt-4
    `};
`;

export function AboutMe() {
  return (
    <AboutMeContainer id="home">
      <ImageContainer>
        <img src={ProfileImg} alt="" />
      </ImageContainer>
      <InfoContainer>
        <p style={{ fontSize: "1.5rem" }}>Hello</p>
        <Title>
          I'm{" "}
          <strong style={{ color: "#1e40af" }}>
            Bao Khang
            <br /> A
          </strong>{" "}
          Front-end Developer
        </Title>
        <InfoText>
          💻 I am a front-end developer in Ho Chi Minh City. I'm going to
          graduate from FPT University in summer 2023 and currently looking for
          a fulltime Front-end developer position.
          <br />
          💻 I have experience with Typescript, React, Tailwind, Ant Design,
          Bootstrap.
          <br /> 💻 I would be thrilled to learn more alongside your
          cross-functional team of engineers, designers, and developers.
        </InfoText>
        <ButtonsContainer>
          <Button text="Download CV" source={myCVurl} downloaded="khang-cv" />
        </ButtonsContainer>
      </InfoContainer>
    </AboutMeContainer>
  );
}
