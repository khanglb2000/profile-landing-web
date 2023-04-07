import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import { Contact } from "./contact";
import { Projects } from "./projects";
import Technologies from "./technologies";
import { AboutMe } from "./aboutMe";
import ScrollButton from "../../components/scrollButton";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-screen
    items-center
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      {/* <TopSection /> */}
      <AboutMe />
      <Marginer direction="vertical" margin="4em" />
      <Projects />
      <Marginer direction="vertical" margin="4em" />
      <Technologies />
      <Marginer direction="vertical" margin="4em" />
      <Contact />
      <Marginer direction="vertical" margin="4em" />
      <Footer />
      <ScrollButton />
    </PageContainer>
  );
}
