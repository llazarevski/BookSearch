import React from 'react';
import './searchform.css';

export default function SearchForm(props){
    return(
        <div className='searchForm'>
            <form>
            <label for='search'>Search:</label>
            <input type="text" name="search" id='search'/>
            <button type="submit" >Submit</button>
            </form>
        </div>
    );

};

