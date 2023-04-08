import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";
import ProfileImg from "../../../assets/images/cv-profile.png";

const AboutMeContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        p-4
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
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
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
          💻 I am a junior front-end developer in Ho Chi Minh City. I'm going to
          graduate from FPT University in summer 2023 and currently looking for
          a fulltime Front-end developer position.
          <br />
          💻 I have experience with Typescript, React, Tailwind, Ant Design,
          Bootstrap.
          <br /> 💻 I would be thrilled to learn more alongside your
          cross-functional team of engineers, designers, and developers.
        </InfoText>
        <ButtonsContainer>
          <Button
            text="Download CV"
            source={ProfileImg}
            downloaded="khang-cv"
          />
        </ButtonsContainer>
      </InfoContainer>
    </AboutMeContainer>
  );
}
