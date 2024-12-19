import styled from 'styled-components';

export const Wrapper = styled.div`
  .input {
    position: relative;

    label {
      position: absolute;
      color: ${(props) => props.theme.palette['medium-a-gray']};
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.15px;
      left: 0px;
      top: 20px;
      transition: 0.2s ease all;
      pointer-events: none;
      cursor: text;
    }

    input {
      padding-bottom: 6px;
      width: 100%;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.palette['dark-a-gray']};
      outline: none;
      margin-top: 24px;

      & ~ span {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background-color: ${(props) => props.theme.palette['dark-lavender']};
        transition: 0.2s ease all;
      }

      &:invalid {
        outline: none;
        box-shadow: none;
      }
      &:valid,
      &.focus {
        & ~ label {
          top: 5px;
          font-size: 12px;
          line-height: 12px;
        }
      }
      &.focus {
        outline: none;
        padding-right: 30px;
        box-sizing: border-box;

        & ~ label {
          color: ${(props) => props.theme.palette['dark-lavender']};
        }

        & ~ span {
          width: 100%;
          left: 0;
        }

        & ~ button {
          display: block;
        }
      }
    }

    button {
      position: absolute;
      right: 0;
      bottom: 0;
      display: none;
    }
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.palette['a-red']};
    margin-top: 7px;
  }
`;
