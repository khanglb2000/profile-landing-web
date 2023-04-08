import styled from "styled-components";
import { SCREENS } from "../responsive";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: white;

  @media (max-width: ${SCREENS.md}) {
    left: 43%;
  }
`;
