import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import { Contact } from "./contact";
import { Projects } from "./projects";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-screen
    pl-1
    pr-1
    items-center
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <Projects />
      <Marginer direction="vertical" margin="4em" />
      <Contact />
      <Marginer direction="vertical" margin="4em" />
      <Footer />
    </PageContainer>
  );
}
