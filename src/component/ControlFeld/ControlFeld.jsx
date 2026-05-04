import React, { useState } from 'react';

const ControlFeld = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [erro, setErro] = useState('')
    const handelSubmit = (e) => {
        e.preventDefault();


    }
    const handelonChange = (e) => {
        e.preventDefault();
      console.log(name,email,password);
        setPassword(e.target.value)

        if(password.length < 6){
            setErro('Password must be at least 6 characters')
        }else{
            setErro('')
        }
        
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='Enter name' onChange={handleNameChange} name='name' required />
                <input type="text" placeholder='Enter mail' onChange={handleEmailChange} name='email'  required/>
                <input type="password" onChange={handelonChange} defaultValue={password} placeholder='Enter password' name='password' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{erro}</small>
            </p>

            
        </div>
    );
};

export default ControlFeld;