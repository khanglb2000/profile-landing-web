import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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

const StepsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `};
`;

const StepContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:w-96
        items-center
        transition-colors
        hover:text-blue-800
        m-3
    `};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `};
`;

const StepTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `};
`;

const StepDescription = styled.p`
  ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-600
    `};
`;

const StepIcon = styled.span`
  ${tw`
        text-blue-800
        text-3xl
    `};
`;

export function Contact() {
  return (
    <Container id="contact">
      <Title>Contact Me</Title>
      <StepsContainer>
        <StepContainer>
          <a href="mailto:lambaokhang2000@gmail.com">
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faEnvelope} color="green" />
              </StepIcon>
            </Step>
          </a>
          <StepTitle>Send email</StepTitle>
          <StepDescription>Send email for work.</StepDescription>
        </StepContainer>
        <StepContainer>
          <a
            href="https://www.linkedin.com/in/baokhang82"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faLinkedin} />
              </StepIcon>
            </Step>
          </a>
          <StepTitle>My Linkedin</StepTitle>
          <StepDescription>Connect me on Linkedin.</StepDescription>
        </StepContainer>
        <StepContainer>
          <a
            href="https://github.com/khanglb2000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faGithub} color="black" />
              </StepIcon>
            </Step>
          </a>
          <StepTitle>Github</StepTitle>
          <StepDescription>Visit my github.</StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
