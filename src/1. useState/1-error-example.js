import React from 'react';

const ErrorExample = () =>{

    let title = 'random title';
    
    const handleClick = () =>{
        title = 'hellow world'
        alert(title);

    };

    return(

        <React.Fragment>

            <h2>{title}</h2>
        
        <button type='buttom' className='btn' onClick={handleClick}>
            Change title
        </button>

        </React.Fragment>


    );


}


export default ErrorExample;