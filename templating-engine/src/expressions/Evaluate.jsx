import React from 'react'

const Evaluate = ({ expression }) => {

  return (
    <>{eval(expression)}</>
  )
}

export default Evaluate;