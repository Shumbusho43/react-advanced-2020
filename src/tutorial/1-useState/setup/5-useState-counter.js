import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0)
  }
  const complex = () => {
    setTimeout(() => {
      //setValue(value +1)
      setValue((prevState) => {
        return prevState +1
      })
     },2000)
  }
  return (
    <React.Fragment>
      <section style={{margin:"4rem 0"}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>setValue(value-1)}>Decrease</button>
        <button className="btn" onClick={reset}>reset</button>
        <button className="btn" onClick={()=>setValue(value+1)}>increase</button>
      </section>
      {/* complex counter */}
      <section style={{margin:"4rem 0"}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complex}>increase later</button>
      </section>
    </React.Fragment>
  )
};

export default UseStateCounter;
