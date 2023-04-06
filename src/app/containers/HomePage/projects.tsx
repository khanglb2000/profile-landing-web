import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IProject } from "../../../typings/project";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Project } from "../../components/project";

const ProjectsListContainer = styled.div`
  ${tw`
        max-w-screen-xl
        w-full
        flex
        flex-col
        items-center
        justify-center
        md:pl-0
        md:pr-0
        mb-10
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

const ProjectContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;

const EmptyCars = styled.div`
  ${tw`
        w-full
        flex
        justify-center
        items-center
        text-sm
        text-gray-500
    `};
`;

const LoadingContainer = styled.div`
  ${tw`
        w-full
        mt-9
        flex
        justify-center
        items-center
        text-base
        text-black
    `};
`;

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

export function Projects() {
  const project: IProject = {
    name: "LOSMS",
    thumbnailSrc:
      "https://firebasestorage.googleapis.com/v0/b/bird-shop-22ade.appspot.com/o/appImages%2Fpetro-store-page.png?alt=media&token=159bcfb8-983a-47bd-bc73-7f8b83e613fd",
    description:
      "LOSMS is a lubricant selling application for Petrolimex company. Petrolimex can manage orders and inventory more efficiently as well as engage with its customers easier.",
    source: "https://github.com/redore0311/Capstone-Project-FE",
  };

  const project2: IProject = {
    name: "Chystore",
    thumbnailSrc:
      "https://firebasestorage.googleapis.com/v0/b/bird-shop-22ade.appspot.com/o/appImages%2Fadmin-stats-page.PNG?alt=media&token=6dbd7227-03ec-4772-8785-5ce3d0269f0c",
    description:
      "This project is about a birds selling application for Chystore Bird Store. Chystore can sell their bird products more efficiently across Viet Nam, as well as view store statistics.",
    source: "https://github.com/mavisphung/swp391/tree/main/frontend.admin",
  };

  const project3: IProject = {
    name: "Music Player",
    thumbnailSrc:
      "https://firebasestorage.googleapis.com/v0/b/bird-shop-22ade.appspot.com/o/appImages%2Fmusic-player.PNG?alt=media&token=44c0948d-d365-4c12-8cf9-9cf100a0fb74",
    description:
      "With Music Player, user can play, pause songs, skip to next or previous one, or even play in suffle mode.",
    source: "https://github.com/khanglb2000/music-player-study",
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <ProjectsListContainer id="project">
      <Title>Some of my Projects</Title>
      <ProjectContainer>
        <Carousel
          swipeable={true}
          showDots={true}
          autoPlay={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          deviceType={"desktop"}
          partialVisible={true}
        >
          <Project {...project} />
          <Project {...project2} />
          <Project {...project3} />
          <Project {...project} />
        </Carousel>
      </ProjectContainer>
    </ProjectsListContainer>
  );
}
