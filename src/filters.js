import React from 'react';
import './filters.css'

export default function Filters(props){
    return(
        <div className='filters'>
            <label for="print-type">Print Type:</label>
            <select name="print-type">
            <option value="all">All</option>
            <option value="hardback">Hardback</option>
            <option value="ebook">eBook</option>
            </select>
            <label for="book-type">Booke Type:</label>
            <select name="book-type">
            <option value="no-filter">No Filter</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-fiction</option>
            </select>
        </div>
    )
};