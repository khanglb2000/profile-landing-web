import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Project } from "../../components/project";

const TopCarsContainer = styled.div`
  ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
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

const CarsContainer = styled.div`
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
  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
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
    <TopCarsContainer id="project">
      <Title>Some of my Projects</Title>
      <CarsContainer>
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
          <Project {...testCar} />
          <Project {...testCar2} />
          <Project {...testCar2} />
          <Project {...testCar} />
        </Carousel>
      </CarsContainer>
    </TopCarsContainer>
  );
}
