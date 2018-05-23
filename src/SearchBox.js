import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        
<input className= 'search'
type='search'
placeholder='search'
onChange= {searchChange}
/>

    );
}
export default SearchBox;