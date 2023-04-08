import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import LogoImg from "../../../assets/images/logo-light.png";
import LogoDarkImg from "../../../assets/images/logo-dark.png";
interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  padding-left: 0.5rem;
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;

  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === "dark" ? LogoDarkImg : LogoImg} alt="logo" />
      </Image>
      <LogoText color={color || "dark"}>
        <a href="#home">Baokhang</a>
      </LogoText>
    </LogoContainer>
  );
}
