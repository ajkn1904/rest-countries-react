import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h1>Visit the World!</h1>
            <h3>Total {countries.length} countries.</h3>
        
            <div className='countries-container'>
            {
                countries.map(country =>
                <Country country={country} 
                key = {country.cca3}></Country>)
            }
            </div>

        </div>
    );
};

export default Countries;