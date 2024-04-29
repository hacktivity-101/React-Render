import React from 'react'

const data = ['item1', 'item2', 'item3']; {
 return (
    <div>
    {/* This is a comment */}
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  ) 
}

export default comments