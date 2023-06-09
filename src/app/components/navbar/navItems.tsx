import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import menuStyles from "./menuStyles";
import { SCREENS } from "../responsive";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
    pr-4
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
    flex
  `};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus:text-white
        no-underline
        hover:text-[#b7fbff]
    `};
    `};
`;

const MobileIcon = styled.div`
  ${tw`
    mr-3
    pt-0.5
    text-xl
  `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  if (isMobile) {
    return (
      <Menu
        right
        styles={menuStyles}
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <ListContainer>
          <NavItem menu onClick={closeSideBar}>
            <MobileIcon>
              <AiFillHome />
            </MobileIcon>
            <a href="#home">Home</a>
          </NavItem>
          <NavItem menu onClick={closeSideBar}>
            <MobileIcon>
              <MdWork />
            </MobileIcon>
            <a href="#project">Projects</a>
          </NavItem>
          <NavItem menu onClick={closeSideBar}>
            <MobileIcon>
              <FaTools />
            </MobileIcon>
            <a href="#tech">Skills</a>
          </NavItem>
          <NavItem menu onClick={closeSideBar}>
            <MobileIcon>
              <AiFillPhone />
            </MobileIcon>
            <a href="#contact">Contact</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      <NavItem>
        <a href="#home">Home</a>
      </NavItem>
      <NavItem>
        <a href="#project">Projects</a>
      </NavItem>
      <NavItem>
        <a href="#tech">Skills</a>
      </NavItem>
      <NavItem>
        <a href="#contact">Contact</a>
      </NavItem>
    </ListContainer>
  );
}
