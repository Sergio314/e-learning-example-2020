import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;

  .suggestions-result {
    &__title {
      font-size: 24px;
      line-height: 32px;
    }

    &__message {
      background-color: ${(props) => props.theme.palette['light-yellow']};
      padding: 8px 16px;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.15px;
      margin-top: 8px;

      a {
        color: ${(props) => props.theme.palette['dark-lavender']};
        text-decoration: underline;
        font-weight: 700;
        margin-left: 5px;
      }
    }

    &__list {
      &__item {
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${(props) => props.theme.palette['soft-gray']};
        padding: 23px 0;

        @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          flex-direction: column;
          align-items: flex-start;
          padding: 15px 0;
        }

        &:last-child {
          border-bottom: none;
        }

        &__name {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.01em;
          margin-right: 15px;
          flex: 1;

          @media (max-width: ${(props) => props.theme.breakpoints.md}) {
            font-weight: 700;
            margin-bottom: 10px;
          }

          &::first-letter {
            @media (min-width: ${(props) => props.theme.breakpoints.mdMin}) {
              font-weight: 700;
              margin-right: 25px;
            }
          }
        }

        &__info {
          display: flex;
          align-items: center;
          width: 420px;

          @media (max-width: ${(props) => props.theme.breakpoints.md}) {
            width: 100%;
          }

          &__details {
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 0.16px;
            border-radius: 16px;
            padding: 3px 0;
            width: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 32px;
            color: ${(props) => props.theme.palette.white};

            @media (max-width: ${(props) => props.theme.breakpoints.md}) {
              margin-right: 10px;
            }

            &.passed {
              &_true {
                background-color: ${(props) => props.theme.palette.green};
              }

              &_false {
                background-color: ${(props) => props.theme.palette.coral};
              }
            }

            &.not-applicable {
              background-color: ${(props) => props.theme.palette['soft-gray']};
            }
          }

          &__message {
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0.1px;
          }
        }
      }
    }

    &__finish {
      margin-top: 80px;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 40px;
      }
    }
  }
`;
