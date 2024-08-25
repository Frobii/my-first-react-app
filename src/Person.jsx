import { useState } from 'react';

export default function Person() {
    const [person, setPerson] = useState({ firstName: '', lastName: '' });
  
    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        })
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        })
    }
  
    return (
      <>
        <input 
            onChange={handleFirstNameChange}
            value={person.firstName}
        ></input>
        <input
            onChange={handleLastNameChange}
            value={person.lastName}
        ></input>
        <h1>{person.firstName + ' ' + person.lastName}</h1>
      </>
    );
}