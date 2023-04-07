import React from "react";
import {
  faReact,
  faBootstrap,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import TailwindLogo from "../../../assets/images/tailwind-css.png";
import MongoDBLogo from "../../../assets/images/mongoDB.jpg";

const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6
    `};
`;

const Title = styled.h2`
  ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

const TechsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `};
`;

const TechIcon = styled.span`
  ${tw`
        w-[5rem]
        h-[5rem]
        rounded-full
        bg-white
        flex
        items-center
        justify-center
        text-[3rem]
        mx-5
        mb-5
        border-4
        border-solid
        border-blue-800
        overflow-hidden
    `};
`;

const Image = styled.div`
  width: auto;
  ${tw`h-[3.5rem] md:h-[3.5rem]`};
  img {
    width: auto;
    height: 100%;
    overflow: hidden;
  }
`;

const Technologies = () => {
  return (
    <Container id="tech">
      <Title>Tech Skills</Title>
      <TechsContainer>
        <TechIcon>
          <FontAwesomeIcon icon={faReact} color="#61dbfb" />
        </TechIcon>
        <TechIcon>
          <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
        </TechIcon>
        <TechIcon>
          <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
        </TechIcon>
        <TechIcon>
          <FontAwesomeIcon icon={faCss3Alt} color="#264de4" />
        </TechIcon>
        <TechIcon>
          <Image>
            <img src={TailwindLogo} alt="tailwind" sizes="1rem" />
          </Image>
        </TechIcon>
        <TechIcon>
          <Image>
            <img src={MongoDBLogo} alt="mongoDB" sizes="1rem" />
          </Image>
        </TechIcon>
      </TechsContainer>
    </Container>
  );
};

export default Technologies;
