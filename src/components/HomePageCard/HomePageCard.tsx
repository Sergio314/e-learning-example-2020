import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';

import { CardItem } from './style';

interface HomePageCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export const HomePageCard: React.FC<HomePageCardProps> = ({
  title,
  description,
  buttonText,
  buttonHref
}) => (
  <CardItem>
    <h5>{title}</h5>
    <p>{description}</p>
    <Link to={buttonHref}>
      <Button
        text={buttonText.toUpperCase()}
        type='button'
        className='card-item__button'
      />
    </Link>
  </CardItem>
);
