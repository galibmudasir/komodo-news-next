export const dateFormatter = (isodate) => {
  const date = new Date(isodate);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formatted_date = date.toLocaleDateString("id-ID", options);

  return formatted_date;
};
