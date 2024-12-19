import styled from 'styled-components';

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 640px;
  max-width: 640px;
  height: 256px;
  padding: 24px 32px;
  background-color: ${(props) => props.theme.palette.white};
  border: 1px solid ${(props) => props.theme.palette['soft-gray']};
  box-shadow: 0px 12px 40px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 16px;
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 150%;
    max-width: 150%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    max-width: 100%;
    margin-top: 30px;
  }

  .card-item__button {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 42px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 24px 32px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      margin: 0 0 20px;
    }
  }
  h5 {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    color: ${(props) => props.theme.palette['dark-a-gray']};
    margin: 0 0 16px 0;
    text-transform: capitalize;
  }
  p {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
    text-align: left;
    color: ${(props) => props.theme.palette['dark-a-gray']};
    height: 118px;
    letter-spacing: 0.15000000596046448px;
  }
`;
