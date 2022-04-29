import React, { useEffect, useState } from "react";
import styles from '../styles/SignupBox.module.css';
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import axios from "axios";
import Router from "next/router";

export function SignupBox() {

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
            Router.push('/login');
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

    const {firstname, lastname, email, phone, username,password, firstInitial, lastInitial } = data;
    

    return ( 
        <div className={styles.mainBox}>
            <header className={styles.loginBox}>
                SIGN UP
            </header>
            <div className={styles.formBox}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">
                        First Name: 
                        <input className={styles.field} type="text" placeholder="John" name="firstname" value={firstname} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label htmlFor="lastname">
                        Last Name: 
                        <input className={styles.field} type="text" placeholder="Doe" name="lastname" value={lastname} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label htmlFor="email">
                        Email: 
                        <input className={styles.field} type="text" placeholder="johndoe@email.com" name="email" value={email} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label htmlFor="phone">
                        Phone Number: 
                        <input className={styles.field} type="text" placeholder="123-456-7890" name="phone" value={phone} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label htmlFor="username">
                        User Name: 
                        <input className={styles.field} type="text" placeholder="johndoe" name="username" value={username} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <label htmlFor="password">
                        Password: 
                        <input className={styles.field} type="password" placeholder="Enter Password" name="password" value={password} onChange={changeUpdate} required></input>
                    </label>
                    <br></br>
                    <input className={styles.submitBox} type="submit" id="submit" value="Submit"></input>
                </form>
                <a className={styles.link} href="login">Login</a>
            </div>
        </div>
    );
}