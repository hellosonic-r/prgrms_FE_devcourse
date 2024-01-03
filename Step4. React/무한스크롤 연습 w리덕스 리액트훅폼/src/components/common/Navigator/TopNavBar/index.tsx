import React from 'react';
import styled from 'styled-components';

const TopNavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 40rem;
  height: 3rem;
  background-color: #eeeeee;
`;
const TopNavBar = () => {
  return <TopNavBarWrapper>TopNavBar</TopNavBarWrapper>;
};

export default TopNavBar;
