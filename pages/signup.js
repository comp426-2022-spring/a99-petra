import React, { useEffect, useState } from "react";

function SignUp(Component) {

    /*
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
    });

    function handleChange(event) {
        setData({...data, [event.target.name]:[event.target.value]});
    }

    function handleSubmit(event) {
        alert("firstname" + data.firstname);
    }*/

    return (
        
        <div className='Inputs'>
            <form>
                <label for='first-name'>
                    First Name: 
                    <input type='text' placeholder='John' name='first-name' required></input>
                </label>
                <br></br>
                <label for='last-name'>
                    Last Name: 
                    <input type='text' placeholder='Doe' name='last-name' required></input>
                </label>
                <br></br>
                <label for='email'>
                    Email: 
                    <input type='text' placeholder='johndoe@email.com' name='email' required></input>
                </label>
                <br></br>
                <label for='phone'>
                    Phone Number: 
                    <input type='text' placeholder='123-456-7890' name='phone' required></input>
                </label>
                <br></br>
                <label for='user-name'>
                    User Name: 
                    <input type='text' placeholder='johndoe' name='user-name' required></input>
                </label>
                <br></br>
                <label for='password'>
                    Password: 
                    <input type='password' placeholder='Enter Password' name='password' required></input>
                </label>
                <br></br>
                <label for='repeat-password'>
                    Repeat Password: 
                    <input type='password' placeholder='Enter Your Password Again' name='repeat-password' required></input>
                </label>
                <input type='submit' value='Submit'></input>
            </form>
        </div>
        
        
    )
}

export default SignUp