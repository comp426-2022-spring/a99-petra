import styles from '../styles/general.module.css'
import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";


export default function Home() {

  const [userData, setUserData] = useState(null);
  const [path1, setPath1] = useState('/loginMain');
  const [path2, setPath2] = useState('/signup');
  useEffect(async () => {

    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        // console.log(uid)
        if (userData == null) {
          await axios.get(`/api/users/${uid}`).then(async (response) => {
            console.log(response.data);
            setUserData(response.data)
          })
        }
        setPath1('/simpleProfile');
        setPath2('/simpleProfile');
      } else {
        // User is signed out
        console.log('user signed out')
        setPath1('/loginMain');
        setPath2('/signup');
      }
    });
  })


  return (
    <div id={styles.main}>
      <body>
        <div id={styles.grid}>

          <div id={styles.navbar}>
            <div id={styles.navbar_content}>
              <img src="placeholder.png" />
              <div id={styles.navbar_profile}>
                <div id={styles.profile_box}>
                  <p>
                  </p>
                  <a id={styles.circle} href={path1}> {userData != null ? `${userData.firstInitial}${userData.lastInitial}` : "login"}</a>
                  <a href={path2}>{userData != null ? "view profile" : "signup"}</a>
                </div>
              </div>
              <div id={styles.navbar_links}>
                <a href="/" class="active">home</a>
                <a href="/simpleDashboard">dashboard</a>
              </div>
            </div>
          </div>

          <div id={styles.content}>
            <div id={styles.about}>
              <p>Team Petra</p>
              <p>Created By: Andrew Byerle, Ashwin Yerramsetty, Matthew Bare, Sofia Wong, Winfield Warren</p>
              <p>Description:</p>
            </div>
          </div>

          <div id={styles.footer}>

          </div>
        </div>
      </body>
    </div>
  )

}
