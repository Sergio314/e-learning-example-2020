export const convertTimeToESTFormat = (date: string) => {
  const formatedDate = new Date(date);

  return formatedDate
    .toLocaleDateString('en-US', {
      timeZone: 'EST',
      timeZoneName: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
    .replace(',', '')
    .replace('am', 'AM')
    .replace('pm', 'PM')
    .replace('GMT-5', 'EST');
};
