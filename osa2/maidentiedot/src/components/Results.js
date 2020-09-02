import React from 'react'
import Country from './Country'

const Results = ({results, setFilter}) => {
    console.log("results", results.length)
    if(results.length > 10 ||results.length == 0) { 
        return (
        <>
            <p>Too many matches, specify another filter</p>
        </>
        )
    }   else if(results.length > 1) {
        return (
            <>
                {results.map( (country) => 
                    <p>{country.name}<button onClick={() => {setFilter(country.name) }}>show</button></p>
                )}
            </>
        )
    } else {
        return (
                <Country country={results[0]} />
        )
    }
}

export default Results