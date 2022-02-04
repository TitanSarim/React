import React, {useEffect, useRef} from 'react';

const UseRefBasics = () =>{

const refcontainer = useRef(null);
const divcontainer = useRef(null);
    

const handleSubmit = (e) =>{

    e.preventDefault();
    console.log(refcontainer.current.value);
    console.log(divcontainer.current.value);

};

useEffect(() =>{


    console.log(refcontainer.current);
    refcontainer.current.focus();


})

console.log(refcontainer);

return(

    <>
    
        <form className='form' onSubmit={handleSubmit}>

            <div>
                <input type="text" ref={refcontainer}/>
                <button type='submit'>Submit</button>
            </div>

            <div ref={divcontainer}>hello</div>

        </form>

    </>

);

}

export default UseRefBasics;