export const convertHoursToMinutes = (hoursAmount: string) => {
  const [hours, minutes] = hoursAmount.split(':').map(Number);

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}