import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
//useEffect is working out of component
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (value>0) {
      document.title = `New dddMessage ${value}`
    }
    console.log("call useEffect");
  },[value]) 
  console.log("david");
  const increase = () => {
    setValue((oldValue) => {
      return oldValue + 1;
    })
  }
  return (
    <>
    <h2>{value}</h2>
    <button type="button" className="btn" onClick={increase}>Click me</button>
      </>
  )
};

export default UseEffectBasics;
