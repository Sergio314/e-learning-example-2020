import styled from 'styled-components';

export const Wrapper = styled.div<{ isCancelText: boolean }>`
  padding: 24px 32px 32px 32px;
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2),
    0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 20px;
  }

  .title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 10px;
    white-space: pre-line;
  }

  .description {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }

  .actions {
    display: flex;
    align-items: flex-end;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      flex-direction: column;
      align-items: stretch;
    }

    &.full-width button {
      flex: 1;
    }

    button {
      min-width: 110px;

      &:first-child {
        margin-right: ${(props) => (props.isCancelText ? '20px' : '0')};
        margin-top: 30px;
        width: ${(props) => (props.isCancelText ? 'auto' : '100%')};

        @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
          margin: ${(props) => (props.isCancelText ? '20px 0' : '20px 0 0')};
        }
      }
    }
  }
`;
