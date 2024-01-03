import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SplashPageWrapper = styled.div`
  height: 100vh;
`;
const SplashPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/home');
    }, 2000);
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);
  return <SplashPageWrapper>SplashPage</SplashPageWrapper>;
};

export default SplashPage;
