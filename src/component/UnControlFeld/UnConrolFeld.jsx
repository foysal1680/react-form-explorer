import React,{useRef} from 'react';

const UnConrolFeld = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const handelSubmit= e =>{
    e.preventDefult()
    console.log(emailRef.current.value);
     const email=emailRef.current.value;
    console.log(passwordRef.current.value);
    const password=passwordRef.current.value;

    }

    return (
      <div>
        <form action="" onSubmit={handelSubmit}>
            <input type='email' placeholder='Enter mail' name='email'  required/>
            <input type='password' placeholder='Enter password' name='password' required />
            <br />
            <input type="submit" value="Submit" />  
        </form>
      </div>
    )
        
    
};

export default UnConrolFeld;