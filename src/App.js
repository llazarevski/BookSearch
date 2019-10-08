import React, {Component} from 'react';
import './App.css';
import SearchHeader from './searchheader';
import BookList from './booklist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      books: [],
      showBookDetails: false
    };
  }

  componentDidMount(){
    const url = 'https://www.googleapis.com/books/v1/volumes?';
    let params = {
      q = []
      key = AIzaSyDlsn3GHt3LSATXhaCSeSoXV0rPhTPf6jc;

    }
    const options ={
      method: 'GET',
    }
  }
  render(){
      const page = this.state.showBookDetails
      ? <Book />
      : <SearchHeader />
        <BookList books= {this.state.books}>
  
  return (
    <div className="App">
      <header className="App-header">
        Google Book Search
      </header>
          {page}
    </div>
  );
  }
}

export default App;
