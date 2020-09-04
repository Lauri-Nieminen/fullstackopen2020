import React from 'react';
import Weather from './Weather';

const Country = ({country}) => {
    console.log('country', country)
    return( 
        <> 
            <h1>{country.name}</h1>  
            <p>capital {country.capital}<br/>
                population {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language =>
                    <li>{language.name}</li>
                )}
            </ul>
            <img src={country.flag} alt="flag" height="10%" width="10%"/>
            <Weather location={country.capital} />
            
        </>
   )
}


export default Country