import styled from 'styled-components';

export const Wrapper = styled.form`
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 20px 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 40px 50px;
  }
  font-family: 'Roboto', sans-serif;
  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
  }
  h3 {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;

    color: #254555;
  }

  p {
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    color: #525252;
  }
  .fullWidth {
    width: 100%;
  }
  .required {
    color: red;
    margin-left: 5px;
  }
  .reportType {
    display: flex;
    align-items: center;
    margin: 15px 0 0;
    label {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.15000000596046448px;
      text-align: left;
      color: #254555;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .report {
    position: relative;
    margin: 25px 0 30px;
  }
  .otherLabel {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    color: #254555;
  }
  .error {
    position: absolute;
    font-size: 14px;
    color: red;
  }
  .actions {
    display: flex;
    align-items: flex-end;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      flex-direction: column;
      align-items: stretch;
    }

    button {
      &:first-child {
        margin-right: 16px;
        margin-top: 40px;

        @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
          margin: 20px 0;
        }
      }
    }
  }
`;
