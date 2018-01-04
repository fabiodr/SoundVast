export default (date) => {
  const monthString = `0${(date.getMonth() + 1)}`;
  const dateString = `/0${date.getDate()}`;
  const fullYearString = `/${date.getFullYear()}`;
  const formattedDate = monthString + dateString + fullYearString;

  return formattedDate;
};
