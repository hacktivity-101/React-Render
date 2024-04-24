import React from 'react'

const Filters = ({ transform, format, sort }) => {

  return (
    <div className="filters-tab">
      <h3>Filters</h3>
      <ul>
        <li>Transform</li>
        <li>Format</li>
        <li>Sort</li>
        {/* Additional filters can be added here */}
      </ul>
    </div>
  )
}

export default Filters;