import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 56px;

  .summary-result {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        margin-bottom: 20px;
        flex-direction: column;
        align-items: flex-start;
      }

      &__title {
        font-size: 24px;
        line-height: 32px;

        @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          margin-bottom: 10px;
        }
      }

      &__filter {
        display: flex;
        align-items: center;

        &__switch {
          display: flex;
          align-items: center;

          button {
            font-size: 13px;
            line-height: 22px;
            letter-spacing: 0.46px;
            transition: background 0.5s;

            &:first-child {
              border-radius: 4px 0 0 4px;
            }

            &:last-child {
              border-radius: 0 4px 4px 0;
            }
          }
        }

        span {
          font-size: 16px;
          line-height: 28px;
          font-weight: 700;
          letter-spacing: 0.15px;
          margin-right: 16px;
        }
      }
    }

    &__description {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        display: none;
      }

      &__concepts {
        margin-right: 16px;
      }

      span {
        display: inline-block;
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.15px;
        width: 140px;
      }
    }

    &__info {
      &__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        font-family: 'Inter', sans-serif;

        @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        &__title {
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.01em;

          @media (max-width: ${(props) => props.theme.breakpoints.md}) {
            font-weight: 700;
          }

          &:first-letter {
            @media (min-width: ${(props) => props.theme.breakpoints.mdMin}) {
              font-weight: 700;
              margin-right: 25px;
            }
          }
        }

        &__result {
          display: flex;
          margin-left: 10px;

          @media (max-width: ${(props) => props.theme.breakpoints.md}) {
            width: 100%;
            margin-left: 0;
            margin-top: 10px;
          }

          &__topic {
            @media (max-width: ${(props) => props.theme.breakpoints.md}) {
              flex: 1;
              text-align: center;
            }

            &:first-child {
              margin-right: 16px;
            }

            &__title {
              display: none;

              @media (max-width: ${(props) => props.theme.breakpoints.md}) {
                display: block;
                margin-bottom: 10px;
              }
            }

            &__details {
              font-weight: 700;
              font-size: 16px;
              line-height: 22px;
              letter-spacing: -0.01em;
              width: 140px;
              height: 55px;
              display: flex;
              align-items: center;
              justify-content: center;

              @media (max-width: ${(props) => props.theme.breakpoints.md}) {
                width: 100%;
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
                background-color: ${(props) =>
                  props.theme.palette['soft-gray']};
              }
            }
          }
        }
      }
    }
  }
`;
