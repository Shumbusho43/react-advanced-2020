import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
const personaLContext=React.createContext()
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <personaLContext.Provider value={{removePerson,people}}>
      <h3>Context API/ Usecontext</h3>
      <List/>
      </personaLContext.Provider>
    </>
  );
};

const List = () => {
  const  mainData = useContext(personaLContext)
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const {removePerson} = useContext(personaLContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)} className="btn">remove</button>
    </div>
  );
};

export default ContextAPI;
