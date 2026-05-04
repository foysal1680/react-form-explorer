import React from 'react';

const FromAction = () => {
     const handleSubmit = (formdata) => {
        console.log(formdata.get('name'));
        console.log(formdata.get('email'));
     }

    
    return (
        <div>
            <form action={handleSubmit} >
                <input type="text" name='name' placeholder="Enter your name" />
                <input type="email" name='email' placeholder="Enter your email" />
                <br />
                <input type="submit" value="Submit" />


            </form>
            
        </div>
    );
};

export default FromAction;