import styled from 'styled-components';

export const Wrapper = styled.div`
  .welcome {
    margin-top: 5rem;
    margin-bottom: 24px;

    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      flex-direction: column;
    }

    &__title {
      font-weight: 300;
      font-size: 60px;
      line-height: 120%;
      margin-right: 70px;
      letter-spacing: -0.5px;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 40px;
      }
    }

    &__description {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-family: Roboto;
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
      padding-bottom: 18px;
      border-bottom: 1px solid ${(props) => props.theme.palette.background};
      margin-bottom: 16px;
    }
  }

  .start-btn {
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      .start-btn {
        width: initial;
        margin: 0;
      }
    }
  }

  .cards {
    display: flex;
    justify-content: space-between;
    margin-top: 68px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      flex-direction: column;
      margin-top: 30px;
    }
  }

  .previousAssessments {
    margin-top: 120px;
    font-size: 24px;
    line-height: 32px;
    padding-bottom: 18px;
    border-bottom: 1px solid ${(props) => props.theme.palette.background};
    margin-bottom: 16px;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-top: 30px;
    }
  }
`;
