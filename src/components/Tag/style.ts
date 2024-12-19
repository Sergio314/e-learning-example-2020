import styled from 'styled-components';

export const Wrapper = styled.div`
  .tag {
    display: flex;
    align-items: center;
    padding: 3px 10px;
    height: 21px;
    border-radius: 16px;
    margin: 0px 8px;
    color: ${(props) => props.theme.palette.white};
    .tag__text {
      font-family: Roboto, sans-serif;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
    }
  }
`;
