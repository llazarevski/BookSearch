import React, { Component } from 'react';
import './booklist.css';
import BookItem from './bookitem';

class BookList extends Component {
  render() {
    const bookitems = this
          .props
          .bookitem
          .map((bookitems, i) => <BookItem { ...bookitems } key={i}/>);
    return (
      <div className="booklist">
        {bookitems}
      </div>
    );
  }
}

BookList.defaultProps = {
  bookitems: []
};

export default BookList;