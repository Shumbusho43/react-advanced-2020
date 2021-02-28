import React, { useState } from 'react';
const UseStateObject = () => {
  const [person, setPerson] = useState(
    {
      name: "David",
      age: 50,
      message: "Random message"
    })
  const [school, setSchool] = useState("KSS");
  const changeMessage = () => {
    setPerson({ ...person, message: "hello" })
    setSchool("RCA")
  }
  console.log(person);
  return (
    <>
      <h2>{ person.name}</h2>
      <h2>{person.age}</h2>
      <h2>school:{ school}</h2>
      <h2>{person.message}</h2>
      <button type="button" className="btn" onClick={changeMessage}>Change message</button>
      </>
  )
}
export default UseStateObject;
