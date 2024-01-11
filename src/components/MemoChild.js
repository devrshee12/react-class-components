import React from 'react'

const MemoChild = () => {
    console.log("memo child called");
  return (
    <div>MemoChild</div>
  )
}

export default React.memo(MemoChild);