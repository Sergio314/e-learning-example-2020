import React from 'react';
import { Button } from 'components/Button';

import { Wrapper } from './style';

interface Props {
  title: string;
  description: string;
  submitText: string;
  onSubmit: () => void;
  fullWidthButton?: boolean;
  cancelText?: string;
  onCancel?: () => void;
}

export const Notification: React.FC<Props> = ({
  title,
  description,
  submitText,
  cancelText,
  fullWidthButton,
  onSubmit,
  onCancel
}) => {
  return (
    <Wrapper isCancelText={!!cancelText}>
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
      <div className={`actions ${fullWidthButton ? 'full-width' : ''}`}>
        <Button text={submitText} onClick={onSubmit} />
        {cancelText && (
          <Button text={cancelText} transparent onClick={onCancel} />
        )}
      </div>
    </Wrapper>
  );
};
