export const addStartingZero = (value) => (value < 10 ? `0${value}` : value);

export const addDateNames = (date) => {
  const dateObj = new Date(date);
  const formateDate = dateObj.toLocaleDateString("en-Us", {
    month: "long",
    day: "2-digit",
  });
  return formateDate.split(" ").reverse().join(" ");
};
