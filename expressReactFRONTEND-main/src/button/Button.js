import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  --btn-bg: #2176FF;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  background: var(--btn-bg);
  border: 2px solid #fff;
  border-radius: 3px;
  align-self: center;
  cursor: pointer;
`;

export default function Button({children, func}){

    return <StyledButton onClick={func}>{children}</StyledButton>
}