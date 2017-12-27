const treatAsUTC = (date) => {
  const result = new Date(date);

  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());

  return result;
};

export default (startDate, endDate) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
};
