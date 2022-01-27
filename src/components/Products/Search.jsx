import React from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ products, setSearchedProducts }) => {
    return (
        <div className='search-bar'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <input type='text' id='search' name='search' placeholder='Search' onChange={e => {
                e.preventDefault();
                let searched = products.filter(product => product.title.toLowerCase().includes(e.target.value));
                setSearchedProducts(searched);
            }}> 
            </input>
        </div>
        
    )
}

export default Search;