import React from 'react';
import './Header.css';
import SearchForm from './SearchForm';

const Header = ({onSearchSubmit}) => {
    return (
        <header className='header'>
            <SearchForm onSubmit={onSearchSubmit}/>
        </header>
    );
}

export default Header;