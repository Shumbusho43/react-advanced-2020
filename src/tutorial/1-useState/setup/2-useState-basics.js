import React, { useState } from 'react';
//hooks:
//- all start with use ex: useState
//component name must be upperCase
// must be in function or component body
//can call  conditionally

// useState function
const UseStateBasics = () => {
   //console.log(useState());
   // const value = useState(2)[0]
   // const handle= useState(1)[1]
   // console.log(value, handle);
  
  const [text, setText] = useState("random title")
  const handleClick = () => {
    if (text==="random title") {
      setText("Hello world")
    }
    else {
      setText("random title")
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>Change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
