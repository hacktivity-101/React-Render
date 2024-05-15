import React from 'react';
import moment from 'moment';

const DateDisplay = ({ date, format }) => {
  const formattedDate = formatDate(date, format);

  return <div>{formattedDate}</div>;
};

const formatDate = (date, format) => {
  // Implement your date formatting logic here
  // You can use libraries like moment.js or date-fns for formatting
  const formattedDate = moment(date).format(format); // Example: using moment.js library

  return formattedDate;
};

export default DateDisplay;