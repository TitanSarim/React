import React, { useState, useEffect } from 'react';

const ShortCircuit = () =>{

    const[text, setText] = useState('');
    const[isError, setIsError] = useState(false);


    return(

        <>
        
            <h1>{text || 'jhon dow'}</h1>
            <button className='btn' onClick={() => setIsError(!isError)}>Toggle error</button>
            {isError && <h1>Error...</h1>}
            {isError ? <p>There is an error</p>: <div>

                <h2>where is an error</h2>

            </div>}

        </>
    );

}

export default ShortCircuit;