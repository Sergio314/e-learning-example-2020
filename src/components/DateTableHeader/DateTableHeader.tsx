import React from 'react';

import { ReactComponent as UpArrowIcon } from '../../assets/up-arrow.svg';

interface DateTableHeaderProps {
  date: string;
  handleClick?: () => void;
  isTableOpened?: boolean;
}

export const DateTableHeader: React.FC<DateTableHeaderProps> = ({
  date,
  handleClick,
  isTableOpened
}) => {
  return (
    <>
      <tr className='deck-report__table-header' onClick={handleClick}>
        <th>
          <h5>{date}</h5>
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th
          style={{
            textAlign: 'right'
          }}
        >
          <UpArrowIcon
            style={{
              transform: `${isTableOpened ? 'rotate(180deg)' : 'none'}`,
              padding: '0px 23px'
            }}
          />
        </th>
      </tr>
    </>
  );
};
