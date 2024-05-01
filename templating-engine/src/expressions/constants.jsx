import React from 'react'

const constants = ({ constants }) => {
  return (
    <div className="constant-tab">
      <h3>Constants</h3>
      <ul>
        {constants.map((constant, index) => (
          <li key={index}>{constant.name}: {constant.value}</li>
        ))}
      </ul>
    </div>)
}

export default constants;