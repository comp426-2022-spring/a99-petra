import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from '../styles/profile.module.css';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


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

    const signOutUser = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("signout successful")
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <div className={styles.contain}>
            <div className={styles.profile}>
                <div className={styles.circle}>

                </div>
                <div>
                    {userData != null ? userData.firstname : ""}
                </div>

                <div>

                    Last Login Date: XX/XX/XXXX <br></br>
                    Email: jkhdskfhskj@jkh.com <br></br>
                    Phone: 333-333-3333 <br></br>
                </div>

                <a className={styles.button} href='/editUserInfo'>
                    Edit Info
                </a>

                <a className={styles.button} onClick={signOutUser}>
                    Log Out
                </a>
            </div>

        </div>


    )
}