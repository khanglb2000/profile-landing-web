import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";
import JeepImg from "../../../assets/images/jeep.png";
import ProfileImg from "../../../assets/images/cv-profile.png";

const AboutMeContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        py-4
        pl-4
        md:pl-0
        md:pr-0
        bg-white
    `};

  @media (max-width: ${SCREENS.md}) {
    width: 50vh;
  }
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

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
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
  ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
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
      <CarContainer>
        <img src={ProfileImg} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>Bao Khang Lam</Title>
        <InfoText>
          I am a junior front-end developer in Ho Chi Minh City. I'm going to
          graduate from FPT University in summer 2023 and currently looking for
          a fulltime Front-end developer position. I have experience with
          Typescript, React, Tailwind, Angular, Bootstrap. I would be thrilled
          to learn more alongside your cross-functional team of engineers,
          designers, and developers.
        </InfoText>
        <ButtonsContainer>
          <Button text="Download CV" />
        </ButtonsContainer>
      </InfoContainer>
    </AboutMeContainer>
  );
}
