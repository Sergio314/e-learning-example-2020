import React from 'react';

import { Wrapper } from './style';

interface TagProps {
  text: string;
  color?: string;
}

export const Tag: React.FC<TagProps> = ({ text, color }) => {
  return (
    <Wrapper>
      <div className='tag' style={{ backgroundColor: color }}>
        <p className='tag__text'>{text}</p>
      </div>
    </Wrapper>
  );
};
