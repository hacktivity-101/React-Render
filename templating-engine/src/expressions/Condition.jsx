import React from 'react'

const Condition = ({conditionValue, ifValue, elseValue}) => {
  return conditionValue?ifValue:elseValue
}

export default Condition;