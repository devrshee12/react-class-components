import React, { useState } from 'react'
import MemoChild from './MemoChild';

const MemoParent = () => {
    const [count, setCount] = useState([]);

    const increase = () => {
        setCount(count + 1);
    }
    console.log("memo parent called");
  return (
    <div>
        <h1>count {count}</h1>
        <button onClick={increase}>increase</button>
        <MemoChild/>
        {/* {children} */}
    </div>
  )
}

export default MemoParent