import React from 'react';
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';

import { Wrapper } from './style';

interface Props {
  id?: string;
  text: string;
  type?: 'button' | 'reset' | 'submit';
  mode?: 'prev' | 'next';
  onClick?: () => void;
  paddingX?: number;
  paddingY?: number;
  transparent?: boolean;
  color?: string;
  textColor?: string;
  borderColor?: string;
  className?: string;
  tabIndex?: number;
  disabled?: boolean;
  arrowColor?: string;
  hoverArrowColor?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({
  id,
  text,
  onClick,
  type,
  mode,
  paddingX,
  paddingY,
  transparent,
  color,
  textColor,
  borderColor,
  className,
  tabIndex,
  disabled,
  arrowColor,
  hoverArrowColor,
  children
}) => (
  <Wrapper
    id={id}
    type={type || 'button'}
    color={color}
    transparent={transparent}
    paddingX={paddingX}
    paddingY={paddingY}
    mode={mode}
    textColor={textColor}
    borderColor={borderColor}
    onClick={onClick}
    className={className}
    tabIndex={tabIndex}
    disabled={disabled}
    arrowColor={arrowColor}
    hoverArrowColor={hoverArrowColor}
  >
    {mode === 'prev' && <ArrowIcon className='prev-arr' />}
    {text}
    {children}
    {mode === 'next' && <ArrowIcon className='next-arr' />}
  </Wrapper>
);
