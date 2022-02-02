import React from 'react';
import ReactDom from 'react-dom';

// mini book project

import './index.css';

// create parent first
function BookList(){
  return(

      <section>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
      </section>


  );
}

// new create child class function
const Book = () =>{
  return(

    <article  className='book'>

      <Image></Image>
      <Title></Title> 
      <Author></Author>

    </article>


  );
}


// set up book image first
const Image = () =>{
  return(

      <img  className='image' src="https://images-na.ssl-images-amazon.com/images/I/510FdmCFTeL._SX329_BO1,204,203,200_.jpg" alt="" />

  );
} 

// setup for te title
const Title = () =>{
  return( 

      <h1>Red-Handed:</h1>

  );
}

// setup author
const Author = () =>{
  return(

      <h4 style={{color:'#617d98', textAlign:'center', fontSize:'0.75rem', letterSpacing:'0.1rem', textDecoration:'underline'}}>Peter Schweizer</h4>

  );
}

//  new access these by root
ReactDom.render(<BookList/>, document.getElementById('root'));