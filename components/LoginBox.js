import React, { useEffect, useState } from "react";
import styles from '../styles/LoginBox.module.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import Router from "next/router";

export function LoginBox() {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle submit", data.email, data.password)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Signed in user: ", user);
        axios.put(`/api/users/${user.uid}`, {
          lastLoginDate: new Date().toLocaleString(),
        })
        Router.push('profile');
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });

  }

  const changeUpdate = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }

  const { email, password } = data;

  return (
    <div className={styles.mainBox}>
        <header className={styles.loginBox}>
            LOGIN
        </header>
        <div className={styles.formBox}>
            <form onSubmit={handleSubmit}>
            <label>Email
                <input className={styles.usernameBox} type="text" name="email" value={email} onChange={changeUpdate} /><br />
            </label>
            <label>Password
              <input className={styles.passwordBox} type="password" name="password" value={password} onChange={changeUpdate} display='false'/><br />
            </label>
            <input className={styles.submitBox} type="submit" name="LOGIN" />
            </form>

          <a className={styles.link} href="signup">Sign Up</a>
        </div>
    </div>
  )
}