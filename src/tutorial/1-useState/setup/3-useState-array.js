import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [name, setName] =React.useState("Shumbusho")
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) =>person.id !==id)
        return newPeople
    })
  }
  const changeName=() => {
    setTimeout(() => {
      setName((david) => {
        return (
          david="Oliver"
        )
      })
    }, 2000);
  }
  // return <h2>useState array example</h2>;
    return(
      <>
        {
          people.map((person) => {
           const {id,name} =person
            return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <button onClick={()=>removeItem(id)}>Remove</button>
              </div>)
          })
        }
        <h2>{name}</h2>
        <button className="btn" type="button" onClick={() => setPeople([])}>Delete items</button>
        <button className="btn" onClick={changeName}>changeName</button>
      </>

    )
};
export default UseStateArray;
