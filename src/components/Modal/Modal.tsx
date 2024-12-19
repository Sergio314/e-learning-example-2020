import React, { useEffect, useRef } from 'react';

import { Wrapper } from './style';

interface Props {
  open: boolean;
  maxWidth: string;
  borderColor?: string;
  borderRadius?: number;
  onClose?: () => void;
}

export const Modal: React.FC<Props> = ({
  open,
  maxWidth,
  onClose,
  borderRadius,
  borderColor,
  children
}) => {
  const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !modalRef?.current?.contains(event.target as HTMLInputElement) &&
      onClose
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return open ? (
    <Wrapper
      maxWidth={maxWidth}
      borderRadius={borderRadius || 0}
      borderColor={borderColor || ''}
    >
      <div className='content' data-testid='modal-content' ref={modalRef}>
        {children}
      </div>
    </Wrapper>
  ) : (
    <></>
  );
};
