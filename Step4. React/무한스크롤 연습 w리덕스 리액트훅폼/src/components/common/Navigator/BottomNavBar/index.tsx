import React from 'react';
import styled from 'styled-components';

const BottomNavBarWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 40rem;
  height: 3rem;
  background-color: #eeeeee;
`;
const BottomNavBar = () => {
  return <BottomNavBarWrapper>BottomNavBar</BottomNavBarWrapper>;
};

export default BottomNavBar;
