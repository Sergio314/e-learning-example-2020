import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.palette['dark-a-gray']};
  padding: 0 64px 50px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 20px 20px;
  }
`;
