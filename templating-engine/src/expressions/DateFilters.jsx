import React from 'react';
import moment from 'moment';

const DateFilter = ({ date, format }) => {

  const formatDate = (date, format) => {
    if (format === 'locale') {
      return new Date(date).toLocaleDateString();
    } else if (format === 'fromNow') {
      return moment(date).fromNow();
    } else if (format === 'date-time'){
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    } else if(format === 'short-date'){
      return moment(date).format('L');
    } else if (format === 'long-date'){
      return moment(date).format('LL');
    }
  }

  return <>{formatDate(date, format)}</>;
};

export default DateFilter;