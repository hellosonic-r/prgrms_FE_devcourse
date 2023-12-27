import React from 'react';
import Button from './components/Button/Button';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';

const Title = styled.h1`
  color: ${({ theme }) => theme.color.blue};
`;

const Content = styled.span`
  font-size: ${({ theme }) => theme.font.l};
`;

const App = () => {
  return (
    <div>
      <Button></Button>
      <ThemeProvider theme={theme}>
        <Title>제목입니다.</Title>
        <Content>내용입니다.</Content>
      </ThemeProvider>
    </div>
  );
};

export default App;
