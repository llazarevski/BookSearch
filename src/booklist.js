import React, { Component } from 'react';
import './booklist.css';
import BookItem from './bookitem';

class BookList extends Component {
  render() {
    const books = this
          .props
          .books
          .map((bookitem, i) => <BookItem { ...bookitem } key={i} showBookDetails={this.props.showBookDetails}/>);
          console.log(books)
    return (
      <div className="booklist">
        {books}
      </div>
    );
  }
}

BookList.defaultProps = {
  bookitems: []
};

export default BookList;