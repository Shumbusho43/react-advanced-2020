import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  }
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  })
  return (
    <>
      <form action="" className="form">
        <input type="text" ref={ refContainer}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      < div divRef= {divContainer}>Hello david</div>
      </>
  )
};

export default UseRefBasics;
