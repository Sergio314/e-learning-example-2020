import React from 'react';
import { useHistory } from 'react-router';
import { Button } from 'components/Button';
import { convertTimeToESTFormat } from 'helpers/convertTimeToESTFormat';
import { theme } from 'theme';

import { Wrapper } from './style';

interface Props {
  title: string;
  date: string;
  backgroundColor: string;
  isCronCompleted?: boolean;
  id?: string;
  isPassed?: boolean;
  isCollection?: boolean;
  cardsQty?: number;
  percent?: number;
  onOpen?: () => void;
}

export const Assessment: React.FC<Props> = ({
  title,
  date = '',
  percent,
  isCronCompleted = false,
  id,
  isPassed = false,
  isCollection = false,
  cardsQty,
  onOpen,
  backgroundColor = theme.palette.white
}) => {
  const history = useHistory();
  const handleCollectionClick = () => history.push(`/safmeds/${id}`);

  return (
    <Wrapper
      onClick={isCollection ? handleCollectionClick : onOpen}
      style={{ backgroundColor: backgroundColor }}
    >
      <span className='title'>{title}</span>
      {!isCollection && (
        <span className='date'>{convertTimeToESTFormat(date)}</span>
      )}
      {/* {isCollection && <span className='date'>{date}</span>} */}
      <span
        className={`${
          isCollection
            ? 'collection'
            : `result ${!isPassed ? 'notCompleted' : ''}`
        }`}
      >
        {isCollection
          ? `${cardsQty} ${cardsQty === 1 ? 'deck' : 'decks'}`
          : isPassed
          ? `${isCronCompleted ? 'Scored' : 'Completed'} (${percent}% correct)`
          : 'Scoring in progress'}
      </span>
      <Button
        text='View'
        onClick={isCollection ? handleCollectionClick : onOpen}
        transparent
        paddingX={9}
        paddingY={3}
      />
    </Wrapper>
  );
};
