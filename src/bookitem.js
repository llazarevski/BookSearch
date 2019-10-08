import React from 'react';
import './bookitem.css';

export default function BookItem(props){
    <div className='bookitem'>
        <header className='title'>{props.title}</header>
        <p className='author'>{props.author}</p>
        <p className='price'>{props.price}</p>
        <p className='descripton'>{props.description}</p>    
    </div>
}