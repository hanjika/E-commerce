import React, { useState } from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ products, setSearchedProducts }) => {
    const [searched, setSearched] = useState('');

    const getSearched = () => {
        setSearchedProducts(searched);
    }

    return (
        <div className='search-bar'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={getSearched}/>
            <input type='text' id='search' name='search' placeholder='Search' onChange={e => {
                setSearched(products.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase())));
            }}> 
            </input>
        </div>
        
    )
}

export default Search;