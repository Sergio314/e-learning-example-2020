export const getTimeBySeconds = (sec: number) => {
  const hours = Math.floor(sec / 60 / 60);
  const minutes = Math.floor(sec / 60) - hours * 60;
  const seconds = sec % 60;

  return `${hours} hr ${minutes} min ${seconds} sec`;
};
