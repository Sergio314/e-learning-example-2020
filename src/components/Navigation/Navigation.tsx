import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './style';

export const Navigation: React.FC = () => (
  <Wrapper>
    <Link to='/mockexam'>
      <div className='navigation-link'> Mock exam </div>
    </Link>
  </Wrapper>
);
