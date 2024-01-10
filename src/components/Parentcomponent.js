import React, { useState } from 'react'
import ChildComponent from './ChildComponent';



// for uplift the child state to parent
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  }
  return (
  <>
  <ChildComponent count={count} onIncreament={handleIncrease}/>
  </>
  )
}

export default ParentComponent