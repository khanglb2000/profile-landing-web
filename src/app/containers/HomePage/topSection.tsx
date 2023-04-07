import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";
import { Button } from "../../components/button";

export interface ITopSectionProps {
  id: string;
}

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-1
        pr-1
        lg:pl-12
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
    `};
`;

const RightContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const Slogan = styled.h1`
  ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
  ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-20
        text-gray-800
    `};

  @media (min-width: ${SCREENS.lg}) {
    overflow: visible;
  }
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        mt-4
    `};
`;

export function TopSection() {
  return (
    <TopSectionContainer id="home">
      <LeftContainer>
        <Slogan>Bao Khang Lam</Slogan>
        <Description>
          I am a junior front-end developer in Ho Chi Minh City. I'm going to
          graduate from FPT University in summer 2023 and currently looking for
          a fulltime Front-end developer position. I have experience with
          Typescript, React, Tailwind, Angular, Bootstrap. I would be thrilled
          to learn more alongside your cross-functional team of engineers,
          designers, and developers.
        </Description>
        <ButtonsContainer>
          <Button theme="filled" text="Download CV" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer></RightContainer>
    </TopSectionContainer>
  );
}
