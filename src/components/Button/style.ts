import styled from 'styled-components';

export const Wrapper = styled.button<{
  color?: string;
  textColor?: string;
  transparent?: boolean;
  borderColor?: string;
  mode?: 'prev' | 'next';
  paddingX?: number;
  paddingY?: number;
  disabled?: boolean;
  arrowColor?: string;
  hoverArrowColor?: string;
}>`
  background-color: ${(props) =>
    props.transparent
      ? 'transparent'
      : props.color || props.theme.palette['dark-lavender']};
  border: ${(props) =>
    `1px solid ${
      props.borderColor || props.color || props.theme.palette['dark-lavender']
    }`};
  border-radius: 4px;
  padding: ${(props) => `${props.paddingY || 7}px ${props.paddingX || 21}px`};
  color: ${(props) =>
    props.textColor ||
    (props.transparent
      ? props.color || props.theme.palette['dark-lavender']
      : props.theme.palette.white)};
  text-transform: uppercase;
  display: ${(props) => (props.mode ? 'flex' : 'block')};
  align-items: center;
  font-size: 15px;
  line-height: 26px;
  font-weight: 500;
  letter-spacing: 0.46px;
  background-position: center;
  transition: background 0.6s, border-color 0.6s, color 0.6s;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  &:hover,
  &:focus {
    path {
      fill: ${(props) => props.hoverArrowColor};
    }
    color: ${(props) =>
      props.transparent
        ? props.color || props.theme.palette['dark-lavender']
        : props.theme.palette.white};
    background: ${(props) =>
        props.transparent
          ? props.theme.palette['dark-lavender-opacity']
          : props.theme.palette['medium-dark-lavender']}
      radial-gradient(
        circle,
        transparent 1%,
        ${(props) =>
            props.transparent
              ? props.theme.palette['dark-lavender-opacity']
              : props.theme.palette['medium-dark-lavender']}
          1%
      )
      center/15000%;
    border-color: ${(props) =>
      props.transparent
        ? props.color || props.theme.palette['dark-lavender']
        : props.theme.palette['medium-dark-lavender']};
  }

  &:active {
    background-color: ${(props) =>
      props.transparent ? 'transparent' : props.theme.palette['lavender']};
    background-size: 100%;
    transition: background 0s;
  }

  svg {
    path {
      fill: ${(props) => props.arrowColor};
      &:hover,
      &:focus {
        fill: ${(props) => props.hoverArrowColor};
      }
    }
    margin: ${(props) =>
      props.mode === 'prev'
        ? '0px 12px 0px 0px'
        : props.mode === 'next'
        ? '0px 0px 0px 12px'
        : '0'};
    transform: ${(props) =>
      props.mode === 'prev' ? 'rotate(180deg)' : 'unset'};
  }
`;
