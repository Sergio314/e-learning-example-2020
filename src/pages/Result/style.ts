import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 864px;
  margin: auto;

  .result {
    &__header {
      display: flex;
      align-items: center;
      padding-bottom: 18px;
      margin-bottom: 32px;
      border-bottom: 1px solid ${(props) => props.theme.palette['soft-gray']};

      span {
        font-size: 24px;
      }

      button {
        font-size: 13px;
        line-height: 22px;
        margin-left: 16px;
      }
    }

    &__overall {
      &__title {
        font-size: 24px;
        line-height: 32px;
      }

      &__info {
        display: flex;
        padding-top: 16px;

        @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
          flex-direction: column;
        }

        &:last-child {
          margin-top: 18px;
          border-top: 1px solid ${(props) => props.theme.palette['soft-gray']};

          @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
            margin-top: 10px;
          }
        }

        &__block {
          display: flex;
          flex-direction: column;
          flex: 1;

          @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
            margin-bottom: 10px;
          }

          &__title {
            font-weight: 700;
            font-size: 16px;
            line-height: 28px;
            letter-spacing: 0.15px;
            margin-bottom: 8px;

            @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
              margin-bottom: 0;
            }
          }

          &__value {
            font-family: 'Inter', sans-serif;
            font-size: 16.0156px;
            line-height: 22px;
            letter-spacing: -0.01em;
          }
        }
      }
    }
  }
`;
