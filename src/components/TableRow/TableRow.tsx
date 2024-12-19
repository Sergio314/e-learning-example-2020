import React from 'react';
import { convertTimeToESTFormat } from 'helpers/convertTimeToESTFormat';

interface TableRowProps {
  rowData?: any;
}

export const TableRow: React.FC<TableRowProps> = ({ rowData }) => {
  function fmtMSS(s: number) {
    return new Date(s * 1000).toISOString().substr(11, 8);
  }
  return (
    <>
      <tr className='deck-report__table__row'>
        <td className='deck-report__table__row__td'>{rowData.correct}</td>
        <td className='deck-report__table__row__td'>{rowData.incorrect}</td>
        <td className='deck-report__table__row__td'>{rowData.skipped}</td>
        <td className='deck-report__table__row__td'>
          {fmtMSS(rowData.duration).slice(3)}
        </td>
        <td className='deck-report__table__row__td'>
          {convertTimeToESTFormat(rowData.completedAtString)}
        </td>
      </tr>
    </>
  );
};
