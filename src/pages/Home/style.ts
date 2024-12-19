import styled from 'styled-components';

export const Wrapper = styled.div`
  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      flex: 1;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.15px;
      margin-top: 15px;
    }
  }

  .start-btn {
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      margin: 0 0 20px;
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
