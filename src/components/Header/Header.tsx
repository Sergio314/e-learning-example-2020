import React from 'react';
import { IconButton } from '@material-ui/core';
import logo from 'assets/logo.png';
import { Navigation } from 'components/Navigation';
import { UserHeading } from 'components/UserHeading';

import { Logo, Wrapper } from './style';

export interface HeaderProps {
  isHomepage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isHomepage = true }) => {
  return (
    <Wrapper>
      <Logo to='/'>
        <img
          src={logo}
          alt='E-learning project logo'
          style={{ width: '50px' }}
        />
        <span>E-learning project</span>
      </Logo>
      {isHomepage ? <></> : <Navigation />}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <UserHeading />
        <React.Fragment>
          <IconButton size='medium'>
            <svg
              width='12'
              height='8'
              viewBox='0 0 12 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            ></svg>
          </IconButton>
        </React.Fragment>
      </div>
    </Wrapper>
  );
};
