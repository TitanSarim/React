import React from 'react';
import ReactDom from 'react-dom';


import './index.css';

// ! decale and set objects list here and the access in parent & child classes
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51rmlxN57sL._SX258_BO1,204,203,200_.jpg',
  title: 'Head First Design Patterns',
  author: 'Eric Freeman'
}

const SecondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/510FdmCFTeL._SX329_BO1,204,203,200_.jpg',
  title: 'Red-Handed',
  author: 'Peter Schweizer'
}

// parent class
// access all elements and assign them
function BookList(){
  return(
    <section>
      <Book

        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      
      ></Book>
      <Book
      
      img={SecondBook.img}
      title={SecondBook.title}
      author={SecondBook.author}
      
      ></Book>
    </section>
  );
}

//now display all all elements 
const Book = (props) =>{
  const{img, title, author} = props;
  return(

      <article className='book'>
        <img className='image' src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}P</h4>
      </article>


  );
}





ReactDom.render(<BookList/>, document.getElementById('root'))