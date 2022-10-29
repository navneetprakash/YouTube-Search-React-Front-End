import React from 'react';
import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
  background-color: #d7282f;
  color: #fff;
  font-size: 1rem;
  height: 3rem;
  width: 8rem;
  margin-left: 1rem;
  border: none;
  border-radius: 0.3rem;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #b71c24;
  }
`;

const Button = (props) => {
  return <StyledPrimaryButton onClick={props.onClick}>{props.children}</StyledPrimaryButton>;
};

export default Button;
