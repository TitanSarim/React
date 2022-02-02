import React from 'react';
import ReactDom from 'react-dom';

// css
import './index.css';
import {books} from './books';
import Book from './book';





function BookList(){

  return(

    <section className='booklist'>

    {books.map((book, index)=>{
      return(
        <Book
        key = {book.id}{...book}>
        </Book>
      );
    })}

    </section>

  );


};





ReactDom.render(<BookList/>, document.getElementById('root'))