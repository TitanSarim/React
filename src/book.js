import React from 'react';

const Book = (props) =>{

    const{img, title, author} = props;

    const clickHandler = (e) =>{
        console.log(e);
        console.log(e.target);
        alert(author)
    };

    const complaxexample = (author) =>{
      alert(author)
    }


  return(

    <article className='book'>

      <img className='image' src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>

      <button type='button' onClick={clickHandler}>Button</button>
      
      <button type='button' onClick={()=> complaxexample(author)}> moew complax</button>


    </article>

  );

};


export default Book;
