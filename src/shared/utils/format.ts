import dayjs from 'dayjs';

export const dateDiff = (
  currentDate: string | Date,
  previousDate: string | Date,
  flag: 'day' | 'hour',
): number => {
  const d1 = dayjs(previousDate);
  return d1.diff(currentDate, flag);
};
