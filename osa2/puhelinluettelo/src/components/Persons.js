import React from 'react'


const Persons = ( {personsToShow, deletePerson} ) => {
    return (
        <>
            {personsToShow.map( (person) => 
                <Person key={person.name} person={person} deletePerson={deletePerson} />
             )}
        </>
    )
}

const Person = ( {person, deletePerson} ) => {
   
    return (
        <>
            <p>{person.name} {person.number} <button onClick={() => {deletePerson(person.id)} }>Delete</button></p>
        </>
    )
}

export default Persons