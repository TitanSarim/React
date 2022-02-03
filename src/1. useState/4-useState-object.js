import React, {useState} from 'react';


const UseStateObject = () => {


    const[person, setPerson] = useState({
        name: 'sarim',
        age: '22',
        message: 'hi i am a software engineer',
    });

    const [name, setName] = useState('peter')
    const [age, setAge] = useState('24')
    const [message, setMessage] = useState('iam displayeing m,essage')
    

    const changeMessage = () =>{
        setMessage('hello world')
    }
    

    return(
        <>

            <h3>{name}</h3>
            <h3>{message}</h3>
            <h3>{age}</h3>

            <button className="btn" onClick={changeMessage}> chasnge message</button>
            
        
        </>
    );



};


export default UseStateObject;