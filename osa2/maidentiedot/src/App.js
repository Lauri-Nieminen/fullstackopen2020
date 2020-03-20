import React, {useState, useEffect} from 'react';
import './App.css';
import Filter from './components/Filter'
import Results from './components/Results'
import axios from 'axios'

function App() {
  const [filter, setFilter] = useState('')
  const [results, setResults] = useState([])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  
  const resultsToShow = results.filter(result => 
    result.name.toLowerCase().match( filter.toLowerCase() )
  )
  useEffect( () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fullfilled')
        setResults(response.data)
      })
  }, []) 

  console.log(results)


  return (
    <>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Results results={resultsToShow}/>
    </>
  )
}

export default App;
