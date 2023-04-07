import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
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
        text-gray-800
    `};

  @media (min-width: ${SCREENS.lg}) {
    overflow: visible;
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
