import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.15px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.palette.background};
  margin-bottom: 4px;
  padding: 16px;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    width: calc(50% - 8px);
    margin: 4px;
    box-sizing: border-box;
    display: inline-flex;

    & > * {
      margin-bottom: 20px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }

  .title {
    font-size: 16px;
    line-height: 28px;
    font-weight: 700;
    width: fit-content;
    min-width: 360px;
  }

  .date {
    font-size: 14px;
    line-height: 20px;
    flex: 1;
  }

  .result {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    flex: 1;
  }

  button {
    font-size: 13px;
    line-height: 22px;

    &.hidden {
      visibility: hidden;
    }
  }
`;
