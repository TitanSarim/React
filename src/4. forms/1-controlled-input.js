import React, {useState} from  'react';

// js
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange


const ControlledInputs = () =>{

    const [fristName, SetFirstName] = useState('');
    const [email, SetEmail] = useState('');
    const [people, setPeople] = useState([]);



const handleSubmit = (e) =>{
        e.preventDefault();
        if(fristName && email){

            const person = {id: new Date().getTime().toString(), fristName:fristName, email:email};
            console.log(person);
            setPeople((people)=>{
                return[...people, person];
            });
    SetFirstName('');
    SetEmail('');
        }else{
            console.log('error no vlaue');
            alert('enter value please')
        }

}


return(


        <>
            <form className='form' onSubmit={handleSubmit}>

                <div className='form-control'>
                    <label htmlFor="firstName">Name:</label>
                    <input type="text"
                     id='firstName'
                    name='firstName'
                    value={fristName} onChange={(e) => SetFirstName(e.target.value)}/>
                </div>

                <div className='form-control'>
                    <label htmlFor="firstName">Email:</label>
                    <input type="text"
                     id='email'
                    name='email'
                    value={email} onChange={(e) => SetEmail(e.target.value)} />
                </div>

                <button type='submit'>Add Person</button>

            </form>
                {
                    people.map((person, index) =>{

                        const{id, fristName, email} = person
                        return<div className='item' key={id}>
                            <h4>{fristName}</h4>
                            <h4>{email}</h4>
                        </div>

                    })
                }
            
        </>

    );


}


export default ControlledInputs;