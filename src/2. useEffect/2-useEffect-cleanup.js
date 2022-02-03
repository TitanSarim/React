import React, { useState, useEffect } from 'react';


const UseEffectCleanup = () =>{

    const [size, setSize] = useState(window.outerWidth);
    console.log(size);


    const checkSize = () =>{

        setSize(window.outerWidth)

    };


    // new render the component
    useEffect(() =>{
        console.log('use Effect')
        window.addEventListener('resize', checkSize)
        
        // new clean console to save ram
        return () =>{
            console.log('clean up successfully')
            window.removeEventListener('resize', checkSize)
        }
    });

    
    return(

        <>

            <h1>window outher width</h1>
            <h2>{size}</h2>
        
        </>

    );



}


export default UseEffectCleanup;