import React from 'react'

const Results = ({results}) => {
    if(results.length > 10 ) { 
        return (
        <>
            <p>Too many matches, specify another filter</p>
        </>
        )
    }   else {
        return (
            <>
                {  results.map( (country) => 
                    <p>{country.name}</p>   
                 )}
            </>
        )
    }
}

export default Results