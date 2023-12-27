import styled, { ThemeProvider } from 'styled-components';

const StyledButton = styled.button`
  font-size: 2em;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
`;

StyledButton.defaultProps = {
  theme: {
    color: 'blue',
  },
};

const theme = {
  color: 'red',
};
const Button = () => {
  return (
    <div>
      <StyledButton>Normal</StyledButton>
      <ThemeProvider theme={theme}>
        <StyledButton>Themed</StyledButton>
      </ThemeProvider>
    </div>
  );
};

export default Button;
