import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from '../styles/profile.module.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function Home() {
    const [userData, setUserData] = useState(null);

    useEffect(async () => {

        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                // console.log(uid)
                if (userData == null) {
                    await axios.get(`/api/users/${uid}`).then((response) => {
                        console.log(response);
                        setUserData(response.data)
                    })
                }
            } else {
                // User is signed out
                console.log('user signed out')
            }
        });
        


    })


    return (
        <div className={styles.contain}>
            <div className={styles.profile}>
                <div className={styles.circle}>

                </div>
                <div>
                    {userData != null ? userData.firstname : ""}
                     <br></br>
                    {userData != null ? userData.lastname: ""}
                </div>

                <div>

                    Last Login Date: XX/XX/XXXX <br></br>
                    Email: {userData != null ? userData.email: ""}<br></br>
                    Phone: {userData != null ? userData.phone: ""} <br></br>
                </div>

                <a className={styles.button} href='/editUserInfo'>
                    Edit Info
                </a>

                <a className={styles.button}>
                    Log Out
                </a>
            </div>

        </div>


    )
}