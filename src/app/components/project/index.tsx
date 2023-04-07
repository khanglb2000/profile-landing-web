import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProject } from "../../../typings/project";
import { Button } from "../button";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import TailwindLogo from "../../../assets/images/tailwind-css.png";

interface IProjectProps extends IProject {}

const ProjectContainer = styled.div`
  width: 20em;
  min-height: 30em;
  max-height: 30em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `};
`;

const ProjectThumbnail = styled.div`
  width: 100%;
  min-height: 10em;

  img {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
`;

const ProjectName = styled.h3`
  ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
    `};
`;

const DescriptionContainer = styled.div`
  min-height: 8em;
  ${tw`
        w-full
        flex
        justify-start
        mt-3
    `};
`;

interface TechProps {
  children: JSX.Element | JSX.Element[];
}

const TechContainer = styled.div`
  ${tw`
        w-full
        flex
        justify-start
        mt-3
    `};
`;

const TechIcon = styled.span`
  ${tw`
    text-blue-800
    text-xl
    mr-1
  `};
`;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};
  img {
    width: auto;
    height: 70%;
  }
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
        flex
        bg-gray-300
        mt-2
        mb-2
    `};
`;

const VisitButton = styled(Button)`
  ${tw`
        min-w-full
        mt-5
    `};
`;

export function Project(props: IProjectProps) {
  const { name, thumbnailSrc, description, source, tech } = props;

  let techList = tech;

  const handleRenderLogo = (name: string) => {
    if (name === "html") {
      return <FontAwesomeIcon icon={faHtml5} />;
    } else if (name === "css") {
      return <FontAwesomeIcon icon={faCss3Alt} />;
    } else if (name === "react") {
      return <FontAwesomeIcon icon={faReact} />;
    } else if (name === "bootstrap") {
      return <FontAwesomeIcon icon={faBootstrap} />;
    } else if (name === "tailwind") {
      return (
        <Image>
          <img src={TailwindLogo} alt="tailwind" sizes="1rem" />
        </Image>
      );
    }
  };

  return (
    <ProjectContainer>
      <ProjectThumbnail>
        <img src={thumbnailSrc} alt="" />
      </ProjectThumbnail>
      <ProjectName>{name}</ProjectName>
      <DescriptionContainer>
        <p>{description}</p>
      </DescriptionContainer>
      <TechContainer>
        <>
          <p>Tech:&nbsp;</p>
          {techList?.map((tech, index) => (
            <TechIcon key={index}>{handleRenderLogo(tech)}</TechIcon>
          ))}
        </>
      </TechContainer>
      {/* <TechContainer>
        <TechIcon>
          <FontAwesomeIcon icon={faHtml5} />
        </TechIcon>
        <TechIcon>
          <FontAwesomeIcon icon={faCss3Alt} />
        </TechIcon>
        <TechIcon>
          <FontAwesomeIcon icon={faReact} />
        </TechIcon>
        <TechIcon>
          <FontAwesomeIcon icon={faBootstrap} />
        </TechIcon>
        <TechIcon>
          <Image>
            <img src={TailwindLogo} alt="tailwind" sizes="1rem" />
          </Image>
        </TechIcon>
      </TechContainer> */}
      <VisitButton text="Visit" source={source} />
    </ProjectContainer>
  );
}
