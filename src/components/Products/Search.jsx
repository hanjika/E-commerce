import React from 'react';

const Search = ({ products, setSearchedProducts }) => {
    return (
        <input type='text' id='search' name='search' placeholder='Search' onChange={e => {
            let searched = products.filter(product => product.title.toLowerCase().includes(e.target.value));
            setSearchedProducts(searched);
        }}>
            
        </input>
    )
}

export default Search;
