import React from "react";
import useInputFeld from "../../hooks/useInputFeld";

const HookForm = () => {
    const [name,nameonChange]=useInputFeld('');
    const [email,emailonChange]=useInputFeld('');
    const [password,passwordonChange]=useInputFeld(''); 

    const handelSubmit = (e) => {
        e.preventDefault(); 
        console.log('Form submitted', name, email, password);
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" defaultValue={name}  onChange={nameonChange} />
                <input type="email" defaultValue={email} onChange={emailonChange} />
                <input type="password" defaultValue={password} onChange={passwordonChange} />
                <br />
                <input type="submit" value="Submit" />

            </form>
            
        </div>
    );
};

export default HookForm;