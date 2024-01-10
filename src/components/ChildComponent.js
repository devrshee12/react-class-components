import React from 'react'

const ChildComponent = ({count, onIncreament}) => {

  return (
    <>
    <p>Count in child component {count}</p>
    <button onClick={onIncreament}>Increment</button>
    </>
  )
}

export default ChildComponent