import React from 'react';

import './Country.css'


const Country = (props) => {

const { name, flags, capital, continents, subregion, timezones, area, population } = props.country;

    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="flag" style={{width: '250px', height: '150px'}}></img>
            <p>Capital: {capital}</p>
            <p>Continent: {continents}</p>
            <p>Subregion: {subregion}</p>
            <p>Time zone: {timezones[0]}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
      </div>
    );
};

export default Country;

