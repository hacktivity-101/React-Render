import React from 'react'

const Loop = ({iterator, value, children}) => {
  return iterator.map(item => children)
}

export default Loop