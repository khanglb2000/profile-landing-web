import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
  source?: string;
  downloaded?: string;
}

const BaseButton = styled.button`
  ${tw`
        pr-3
        pl-3
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        content-center
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
    `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
        bg-blue-800
        hover:bg-transparent
        hover:text-blue-800
        hover:border-blue-800
        cursor-pointer
    `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
        border-blue-800
        text-blue-800
        bg-transparent
        hover:bg-blue-800
        hover:text-white
        hover:border-transparent
        cursor-pointer
    `};
`;

export function Button(props: IButtonProps) {
  const { theme, text, className, source, downloaded } = props;

  if (theme === "filled")
    return (
      <a
        href={source}
        style={{ width: "100%" }}
        target="_blank"
        rel="noopener noreferrer"
        download={downloaded}
      >
        <FilledButton className={className}>{text}</FilledButton>
      </a>
    );
  else
    return (
      <a
        href={source}
        style={{ width: "100%" }}
        target="_blank"
        rel="noopener noreferrer"
        download={downloaded}
      >
        <OutlinedButton className={className}>{text}</OutlinedButton>
      </a>
    );
}
