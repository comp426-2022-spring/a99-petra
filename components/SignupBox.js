import React, { useEffect, useState } from "react";
import styles from '../styles/SignupBox.module.css';
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import axios from "axios";

export function SignupBox() {

    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        username:"",
        password:"",
        repeatpassword:""

    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("HANDLE SUBMIT");
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

    const {firstname, lastname, email, phone, username, password} = data;
    

    return ( 
        <div className={styles.mainBox}>
            <header className={styles.loginBox}>
                SIGN UP
            </header>
            <div className={styles.formBox}>
                <form onSubmit={handleSubmit}>
                    <label for="firstname">
                        First Name: 
                        <input className={styles.field} type="text" placeholder="John" name="firstname" value={firstname} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label for="lastname">
                        Last Name: 
                        <input className={styles.field} type="text" placeholder="Doe" name="lastname" value={lastname} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label for="email">
                        Email: 
                        <input className={styles.field} type="text" placeholder="johndoe@email.com" name="email" value={email} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label for="phone">
                        Phone Number: 
                        <input className={styles.field} type="text" placeholder="123-456-7890" name="phone" value={phone} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label for="username">
                        User Name: 
                        <input className={styles.field} type="text" placeholder="johndoe" name="username" value={username} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label for="password">
                        Password: 
                        <input className={styles.field} type="password" placeholder="Enter Password" name="password" value={password} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <input className={styles.submitBox} type="submit" id="submit" value="Submit"></input>
                </form>
                <a className={styles.link} href="login">LOGIN</a>
            </div>
        </div>
    );
}