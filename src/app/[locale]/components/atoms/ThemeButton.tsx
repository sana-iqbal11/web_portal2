import React from "react";
import styled from "styled-components";
// reactstrap
import { Button } from "react-bootstrap";
import Link from "next/link";

const ThemeButton = styled(Link)`
  font-size: 17px !important;
  color: var(--tertiary-color);
  padding: 8px 48px !important;
  background: white !important;
  border: 2px solid var(--tertiary-color);
  margin-top: 20px !important;
  cursor: pointer;
  margin-bottom: 20px !important;
  text-align: center;
  font-weight: 500 !important;

  &:hover {
    box-shadow: 0px 1px 5px 0px #9b9589;
    background: #cc9a28;
    color: var(--tertiary-color);
  }

  &:focus {
    box-shadow: 0px 1px 5px 0px #9b9589;
    background: #cc9a28;
    color: var(--tertiary-color);
  }

  &:active {
    box-shadow: 0px 1px 5px 0px #9b9589;
    background: #cc9a28;
    color: var(--tertiary-color);
  }
`;

export default ThemeButton;
