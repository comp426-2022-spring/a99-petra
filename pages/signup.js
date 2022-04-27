import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import axios from "axios";
import Router from "next/router";


function SignUp() {

    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        username:"",
        password:"",
        firstInitial: "",
        lastInitial: "",
      });


    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("HANDLE SUBMIT");
        data["firstInitial"] = data.firstname[0]
        data["lastInitial"] = data.lastname[0];
        console.log("passing data", data)
        const auth = getAuth();
        console.log("auth", auth)
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Signed up user: ", user)
            const newData = {...data, uid: user.uid};
            console.log(newData);
            axios.post("/api/users", newData).then((response) => {
                console.log(response);
            })
            Router.push('/loginMain');
          })
          .catch((error) => {
            console.log(error.code);
            console.log(error.message);
          });
        
      }
    
      const changeUpdate = e => {
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
      }

      const {firstname, lastname, email, phone, username,password, firstInitial, lastIniti } = data;
    

    return ( 
        <div className="Page">
            <header>
                SIGN UP
            </header>
        <div className="Inputs">
            <form onSubmit={handleSubmit}>
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
                <input 
                type="submit" 
                id="submit" 
                value="Submit" 
                >
                </input>
            </form>
            <a className= "Login" href="/loginMain">LOGIN</a>
        </div>
        </div>
        
        
    )
}

export default SignUp