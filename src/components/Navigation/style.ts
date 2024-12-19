import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  .navigation-link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    width: 208px;
    height: 48px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:hover {
      color: ${(props) => props.theme.palette['dark-lavender']};
      border-bottom: 2px solid
        ${(props) => props.theme.palette['dark-lavender']};
    }
    &:active {
      color: ${(props) => props.theme.palette['dark-lavender']};
      border-bottom: 2px solid
        ${(props) => props.theme.palette['dark-lavender']};
    }

    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      width: 160px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 50px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;
