import React, { useEffect, useState } from "react";
import styles from '../styles/loginStyles.module.css';

export default function Home() {

  const [data,setData] = useState({
    username:"",
    password:""
  });

  const handleSubmit = (event) => {
    alert("your username is: " + data.username);
    alert("your password is: " + data.password);
  }

  const changeUpdate = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }

  const {username,password} = data;

    return (
      <div className={styles.container}>
  
        <main className= {styles.mainBox}>
          <header className= {styles.loginBox}>
            LOGIN
          </header>

        <div className={styles.formBox}>
          <form onSubmit={handleSubmit}>
            <label>Username
              <input className= {styles.usernameBox} type="text" name="username" value={username} onChange={changeUpdate}/><br/>
            </label>
            <label>Password
            <input className= {styles.passwordBox} type="text" name="password" value={password} onChange={changeUpdate}/><br/>
            </label>
            <input className= {styles.submitBox} type="submit" name="LOGIN"/>
          </form>
        

          <a className= {styles.link} href="forgot password link***" >Forget your password?</a><br/>
          <a className= {styles.link} href="signup page link***">Sign Up</a>
          </div>
        </main>
  
      </div>
    )


  

}