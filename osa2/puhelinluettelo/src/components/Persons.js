import React from 'react'

const Persons = ( {personsToShow} ) => {
    return (
        <>
            {personsToShow.map( (person) => 
                <Person key={person.name} person={person} />
             )}
        </>
    )
}

const Person = ( {person} ) => {
    return (
        <>
            <p>{person.name} {person.number}</p>
        </>
    )
}

export default Persons