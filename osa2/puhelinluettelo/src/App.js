import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
   
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  
  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().match( nameFilter.toLowerCase() )
  )

  const addPerson = (event) => {
    event.preventDefault()
    console.log(event)
    if ( persons.filter(person => person.name === newName).length > 0 ) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    console.log(event)
    setNameFilter(event.target.value)
  }

  useEffect( () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fullfilled')
        setPersons(response.data)
      })
  }, []) 

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter filter={nameFilter} handleFilterChange={handleNameFilterChange} />

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} 
                  handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
    
      
      <h2>Numbers</h2>
        <Persons personsToShow={personsToShow}/>
    </div>
  )

}

export default App