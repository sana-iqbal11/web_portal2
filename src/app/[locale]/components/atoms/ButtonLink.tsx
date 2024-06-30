import Link from "next/link";
import styled from "styled-components";

const ButtonLink = styled(Link)`
  position: relative;
  width: 130px;
  height: 48px;
  border: "1px solid #FFFFFF";
  border-radius: 26px;
  opacity: 1;
  text-align: center;
  vertical-align: middle;
  line-height: 5rem;
  background: ${(props) => props.color};

  &:hover {
    background: var(--secondary-color);
    color: black;
    border: 0;
  }
`;

export default ButtonLink;
