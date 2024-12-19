import React, { useMemo, useState } from 'react';
import { DateTableHeader } from 'components/DateTableHeader';
import { TableRow } from 'components/TableRow';

interface TableProps {
  tableDate: any;
  attempts?: any;
}

export const Table: React.FC<TableProps> = ({ tableDate, attempts }) => {
  const [isTableOpened, setTableOpened] = useState(true);

  const table = useMemo(
    () =>
      attempts
        ?.filter((item: any) => item?.completedAtString?.includes(tableDate))
        .map((tr: any) => <TableRow rowData={tr} key={tr._id} />),
    [attempts, tableDate]
  );

  return (
    <>
      <DateTableHeader
        date={tableDate}
        handleClick={() => setTableOpened(!isTableOpened)}
        isTableOpened={isTableOpened}
      />
      {isTableOpened && table}
    </>
  );
};
