import React, { useState, useEffect } from 'react';

const UseEffectBasics = () =>{

    const [value, setValue] = useState(0);


        useEffect(() =>{
            console.log('call use Effect');
            if(value > 1){
                document.title = `new messages(${value})`;
            }
        }, [value]);

        useEffect(()=>{
            console.log('hello world')
        }, [])



    return(

        <>

            <h1>{value}</h1>
            <button className='btn' onClick={()=> setValue(value +1)}>Click me</button>

        </>

    );


}



export default UseEffectBasics;