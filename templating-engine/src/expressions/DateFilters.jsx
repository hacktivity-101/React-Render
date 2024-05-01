import React from 'react'

const NumberFilters = ({ value, filterName }) => {
  const formatCurrency = (value, currencyCode) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(value);
  }

  return formatCurrency(value, filterName)
}

export default NumberFilters;