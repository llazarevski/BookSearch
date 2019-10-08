import React from 'react';
import './book.css';

export default function Book(props){
    return(
    <div className='book'>
        <header className='title'>{props.title}</header>/header>
        <p className='author'>{props.author}</p>
        <p className='price'>{props.price}</p>
        <p className='descripton'>{props.description}</p>    
    </div>
    );
}