// Преобразует дату из iso8601 в yyyy-mm-dd

export const getDate = (isoDate) => {
  const ms = Date.parse(isoDate);
  const date = new Date(ms);
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};
