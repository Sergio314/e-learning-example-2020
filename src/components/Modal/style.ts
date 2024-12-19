import styled from 'styled-components';

export const Wrapper = styled.div<{
  maxWidth: string;
  borderRadius: number;
  borderColor: string;
}>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.palette['dark-a-gray-opacity']};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  .content {
    max-height: 90%;
    max-width: ${(props) => `${props.maxWidth}`};
    background-color: ${(props) => props.theme.palette.white};
    border-radius: ${(props) => `${props.borderRadius}px`};
    border: ${(props) =>
      props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
    margin: 64px;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin: 20px;
    }
  }
`;
