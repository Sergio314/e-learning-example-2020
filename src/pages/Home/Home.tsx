import React from 'react';
import { HomePageCard } from 'components/HomePageCard';

import { Wrapper } from './style';

export const Home: React.FC = () => {
  return (
    <Wrapper>
      <div className='welcome'>
        <span className='welcome__title'>E-learning Placeholder Text</span>
        <span className='welcome__description'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut omnis
          fugit eveniet voluptate?
        </span>
      </div>
      <div className='cards'>
        <HomePageCard
          title='mock exam'
          description='Try a mock exam'
          buttonHref='/mockexam'
          buttonText='mock exam'
        />
      </div>
    </Wrapper>
  );
};
