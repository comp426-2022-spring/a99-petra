import React, { useEffect, useState } from "react";

function SignUp(Component) {

    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        username:"",
        password:"",
        repeatpassword:""

      });


    
      const handleSubmit = e => {
        
      }
    
      const changeUpdate = e => {
        setData({...data,[e.target.name]:[e.target.value]});
      }

      /*const changePassword = e => {
        setData({...data,[e.target.name]:[e.target.value]});
        if(data.password != data.repeatpassword) {
            document.getElementById("submit").disabled=true;
        }
        else{
            document.getElementById("submit").disabled=false;
        }
      }*/

      const {firstname, lastname, email, phone, username,password, repeatpassword} = data;

      //var disabled = false;

    

    return ( 
        <div className="Page">
            <header>
                SIGN UP
            </header>
        <div className="Inputs">
            <form>
                <label for="firstname">
                    First Name: 
                    <input type="text" placeholder="John" name="firstname" value={firstname} onChange={changeUpdate} required></input>
                </label>
                <br></br>
                <label for="lastname">
                    Last Name: 
                    <input type="text" placeholder="Doe" name="lastname" value={lastname} onChange={changeUpdate} required></input>
                </label>
                <br></br>
                <label for="email">
                    Email: 
                    <input type="text" placeholder="johndoe@email.com" name="email" value={email} onChange={changeUpdate} required></input>
                </label>
                <br></br>
                <label for="phone">
                    Phone Number: 
                    <input type="text" placeholder="123-456-7890" name="phone" value={phone} onChange={changeUpdate} required></input>
                </label>
                <br></br>
                <label for="username">
                    User Name: 
                    <input type="text" placeholder="johndoe" name="username" value={username} onChange={changeUpdate} required></input>
                </label>
                <br></br>
                <label for="password">
                    Password: 
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={changeUpdate} required></input>
                </label>
                <br></br>
                <label for="repeatpassword">
                    Repeat Password: 
                    <input type="password" placeholder="Enter Your Password Again" name="repeatpassword" value={repeatpassword} onChange={changeUpdate} required></input>
                    <span name="confirmation"></span>
                </label>
                <input type="submit" id="submit" value="Submit" onSubmit={handleSubmit} disabled={false}></input>
            </form>
            <a className= "Login" href="login page link***">LOGIN</a>
        </div>
        </div>
        
        
    )
}

export default SignUp