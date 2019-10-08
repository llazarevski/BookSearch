import React, {Component} from 'react';
import './searchform.css';

class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          search: "",
        };
      }
      searchChanged(search) {
        this.setState({
          search
        });
      }
    render(){

    
    return(
        <div className='searchForm'>
            <form className='searchForm' >
            <label for='search'>Search:</label>
            <input type="text" name="search" id='search' value={this.props.search} onChange={e => this.searchChanged(e.target.value)}/>
            <button type="submit" >Submit</button>
            </form>
        </div>
    );

};
};

export default SearchForm;
