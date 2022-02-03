import React, { useState } from "react";


/**
 * ! use stateHook
 * ! component must be the uppercase
 * ! must be in function/component body
 * ! cannot call conditionally
*/




const UseStateBasics = () =>{

    const[text, setText] = useState('random title')

const handleClick = () =>{
    if(text === 'random title'){

        setText('Hi berooooooooo')
        
    }else{
        setText('random Title')
    }
};

    return (

        <React.Fragment>

            <h2>{text}</h2>

            <button type="button" className="btn" onClick={handleClick}>Press me</button>

        </React.Fragment>

    );


}



export default UseStateBasics;