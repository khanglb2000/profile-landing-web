import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
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
import FirebaseLogo from "../../../assets/images/firebase.png";
import AntDesignLogo from "../../../assets/images/ant-design.png";
import ReduxLogo from "../../../assets/images/redux-logo.png";

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
  ${tw`h-6 md:h-6`};
  img {
    width: auto;
    height: 75%;
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
      return <FontAwesomeIcon icon={faHtml5} color="#e34c26" />;
    } else if (name === "css") {
      return <FontAwesomeIcon icon={faCss3Alt} color="#264de4" />;
    } else if (name === "react") {
      return <FontAwesomeIcon icon={faReact} color="#61dbfb" />;
    } else if (name === "bootstrap") {
      return <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />;
    } else if (name === "tailwind") {
      return (
        <Image>
          <img src={TailwindLogo} alt="tailwind" />
        </Image>
      );
    } else if (name === "firebase") {
      return (
        <Image>
          <img src={FirebaseLogo} alt="firebase" />
        </Image>
      );
    } else if (name === "antD") {
      return (
        <Image>
          <img src={AntDesignLogo} alt="antD" />
        </Image>
      );
    } else if (name === "redux") {
      return (
        <Image>
          <img src={ReduxLogo} alt="redux" />
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
      <VisitButton text="Visit" source={source} />
    </ProjectContainer>
  );
}
