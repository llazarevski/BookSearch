import React from 'react';
import './searchheader.css';
import SearchForm from './searchform';
import Filters from './filters'

class SearchHeader extends React.Component{
    render(){
        return(
            <div className='searchheader'>
            <SearchForm booksSearchResults ={this.props.booksSearchResults}/>
            <Filters />
            </div>
        )
    }
}

export default SearchHeader;