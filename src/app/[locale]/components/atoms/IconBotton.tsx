import React from "react";
import styled from "styled-components";

export const ButtonBase = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: relative;
  z-index: 1;
  font-size: 30px;
  color: white;

  &:hover {
    background-color: transparent;
  }
`;

type IconBottonProps = {
  className?: string;
  style?: React.CSSProperties;
  icon: React.ReactNode;
  onClick: () => void;
};

export default function IconBotton({
  className,
  style,
  icon,
  onClick,
  ...props
}: IconBottonProps) {
  return (
    <ButtonBase
      className={className}
      style={style}
      onClick={onClick}
      {...props}
    >
      {icon}
    </ButtonBase>
  );
}
