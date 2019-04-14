import React from 'react';
import './Country.css';

const Country = ({country, onClick}) => {
    return (
        <article className='country'>
            <div className='column column-small'>{country.code}</div>
            <div className='column column-middle'>{country.capital}</div>
            <div className='column column-large'>{country.name}</div>
            <div className='column column-small'>{country.continent}</div>
            <div className='column column-middle'>{country.phone}</div>
            <div className='column column-small'>
                <button className='btn-delete' onClick={() => onClick(country.code)}>삭제</button>
            </div>
        </article>
    );
};

export default Country;