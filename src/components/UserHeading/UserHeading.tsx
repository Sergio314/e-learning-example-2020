import React from 'react';

import { Avatar, Wrapper } from './style';

export const UserHeading: React.FC = () => {
  const fullName = localStorage.getItem('fullName') || '';

  const getAvatarLetters = React.useCallback(() => {
    return `${fullName.split(' ')[0]?.trim().charAt(0) || ''}${
      fullName.split(' ')[1]?.trim().charAt(0) || ''
    }`;
  }, [fullName]);
  return (
    <Wrapper>
      <Avatar>{getAvatarLetters()}</Avatar>
      <span>{fullName}</span>
    </Wrapper>
  );
};
