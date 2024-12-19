import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;

  .detailed-result {
    &__title {
      font-size: 24px;
      line-height: 32px;
    }

    &__data {
      overflow-x: auto;
      padding-bottom: 10px;

      @media (min-width: ${(props) => props.theme.breakpoints.mdMin}) {
        align-self: center;
        max-width: 95vw;
      }

      &::-webkit-scrollbar-track {
        border-radius: 4px;
        background-color: ${(props) => props.theme.palette['soft-gray']};
      }

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        border-radius: 4px;
        background-color: ${(props) => props.theme.palette['soft-gray']};
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: ${(props) => props.theme.palette['dark-lavender']};
      }

      &__list {
        display: flex;
        align-items: flex-end;
        margin-top: 50px;

        &__sub-topic {
          display: flex;
          flex-direction: column;
          margin-right: 45px;
          width: 95px;
          min-width: 95px;
          max-width: 95px;
          align-items: center;
          margin-bottom: 23px;

          &__details {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            &__info {
              width: 49px;
              height: 33px;
              font-weight: 500;
              font-size: 14px;
              line-height: 22px;
              letter-spacing: 0.1px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1px;

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

            span {
              font-weight: 500;
              font-size: 14px;
              line-height: 22px;
              letter-spacing: 0.1px;
              margin-right: 13px;
              white-space: nowrap;
            }
          }
        }
      }

      &__name {
        display: flex;

        span {
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.4px;
          text-align: center;
          min-width: 95px;
          max-width: 95px;
          width: 95px;
          margin-right: 45px;

          &::first-letter {
            white-space: nowrap;
          }
        }
      }
    }
  }
`;
