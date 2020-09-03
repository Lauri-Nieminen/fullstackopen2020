import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'



const App = () => {
  const [persons, setPersons] = useState([])
   
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ error, setError ] = useState(null)
 
 
  const personsToShow = persons.filter(person => {
    console.log('personsToShow', person) 
    return person.name.toLowerCase().match( nameFilter.toLowerCase() )
  })

  const addPerson = (event) => {
    event.preventDefault()
    console.log(event)
    if ( persons.filter(person => person.name === newName).length > 0 ) {
      console.log('About to update person', newName)
      if(window.confirm(`${newName} is already in the phonebook, replace the old number with a new one`)) {
        console.log('Updating person', newName)
        const personToBeUpdated = persons.find(person => person.name === newName)
        personToBeUpdated.number = newNumber
        personService.update(personToBeUpdated.id, personToBeUpdated).then(response => {
          setPersons(persons.map(person => person.id !== personToBeUpdated.id ? person : personToBeUpdated))
          showNotification(`Updated ${personToBeUpdated.name}'s phonenumber`)
        }).catch(error => {
          console.log('Update failed')
          showError(`Information of ${personToBeUpdated.name} has already removed from the server`)
          setPersons(persons.filter(person => person.id !== personToBeUpdated.id))
        })
        
      }
    } else {
      //setPersons(persons.concat({name: newName, number: newNumber}))
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService.create(personObject).then(returnedPerson => {
        console.log('returnedPerson', returnedPerson)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        showNotification(`Added ${returnedPerson.name}`)
      })
    }
  }

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const showError = (error) => {
    setError(error)
    setTimeout(() => {
      setError(null)
    }, 5000)
  }

  const deletePerson = (id) => {
    //event.preveaboutntDefault()
    console.log('About to delete person ', id)
    const personToBeDeleted = persons.find(person => person.id === id);
    if(window.confirm(`Delete ${personToBeDeleted.name}?`) ) {
        console.log(`Deleting person ${personToBeDeleted.id} ${personToBeDeleted.name}`)
        personService.remove(personToBeDeleted.id)
        setPersons(persons.filter(person => person.id !== id ))
        showNotification(`Removed ${personToBeDeleted.name}`)
    }
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    //console.log(event)
    setNameFilter(event.target.value)
  }

  useEffect( () => {
    console.log('Loading persons')
    personService.getAll().then(initialPersons => {
      console.log('Persons loaded')
      setPersons(initialPersons)
    })
  }, []) 

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Error error={error} />
      <Filter filter={nameFilter} handleFilterChange={handleNameFilterChange} />

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} 
                  handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
    
      
      <h2>Numbers</h2>
        <Persons personsToShow={personsToShow} deletePerson={deletePerson}/>
    </div>
  )

}

export default App