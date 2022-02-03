import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () =>{

const [user, setUser] = useState([]);

const getUser = async() =>{

    const respnse = await fetch(url)
    const user = await respnse.json();
    setUser(user)
};

useEffect(()=>{
    getUser();
});


return(

    <>
        <h3>Git Hub Users</h3>
        <ul className='users'>

        {/* ==================== */}
            {user.map((user)=>{
                const{id, login, avatar_url, html_url } = user
                
                return(

                    <li key={id}>
                        <img src={avatar_url} alt={login} />
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}>Check Profile</a>
                        </div>
                    </li>

                );

            })}


        </ul>
    </>

);
};


export default UseEffectFetchData;