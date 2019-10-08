import React, {Component} from 'react';
import './App.css';
import SearchHeader from './searchheader';
import BookList from './booklist';
import Book from './book';

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
      q: [],
      key: 'AIzaSyDlsn3GHt3LSATXhaCSeSoXV0rPhTPf6jc'
    };

    function getParams(params) {
      const bookItems = Object.keys(params).map(
        key =>
        `${encodeURIComponent(key)}=${encodeURIComponent(bookItems[key])}`
      );
      return bookItems.join("&");
      console.log(bookItems);
    };
    const booksearchurl = url + getParams(params);
    console.log(booksearchurl);
    const options ={
      method: 'GET',
    };

    fetch(booksearchurl, options)
      .then(res => {
        if(!res.ok){
          throw new Error('Something went wrong, please try again later')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  render(){
      const page = this.state.showBookDetails
      ? <Book />
      : <div className ='bodycontainer'>
          <SearchHeader />
          <BookList books= {this.state.books}/>
        </div>
  
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
