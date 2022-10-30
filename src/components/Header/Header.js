import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapperBackground = styled.header`
  background-color: #333333;
  margin: 0;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const StyledTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  padding: 1rem;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const Header = () => {
  return (
    <>
      <StyledWrapperBackground>
        <StyledTitle>Youtube Search</StyledTitle>
      </StyledWrapperBackground>
      <Outlet />
    </>
  );
};

export default Header;
