import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from '../styles/profile.module.css';
import { getAuth, onAuthStateChanged, deleteUser } from "firebase/auth";


export default function Home() {
    const [userData, setUserData] = useState(null);
    const [uid, setUid] = useState(null)

    useEffect(async () => {

        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                setUid(uid);
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

    const handleFirstnameChange = (event) => {
        setUserData({ ...userData, firstname: event.target.value });
    };

    const handleLastnameChange = (event) => {
        setUserData({ ...userData, lastname: event.target.value });
    };

    const saveNewUserInfo = () => {
        axios.put(`/api/users/${uid}`, userData).then((response) => {
            console.log(response)
        })
    }

    const deleteAccount = () => {
        axios.delete(`/api/users/${uid}`).then((response) => {
            console.log(response)
        })
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            console.log('user deleted')
        }).catch((error) => {
           console.log(error) 
        });
    }


    return (
        <div className={styles.contain}>
            <div className={styles.profile}>
                <div className={styles.circle}>

                </div>
                <div>
                    <input
                        type="text"
                        name="firstname"
                        value={userData != null ? userData.firstname : "loading"}
                        onChange={handleFirstnameChange}
                    />
                    <input
                        type="text"
                        name="lastname"
                        value={userData != null ? userData.lastname : "loading"}
                        onChange={handleLastnameChange}
                    />
                    {/* Add lastname? */}
                </div>

                <div>
                    Last Login Date: XX/XX/XXXX <br></br>
                    Email: jkhdskfhskj@jkh.com <br></br>
                    Phone: 333-333-3333 <br></br>
                </div>

                <a className={styles.button} href='/simpleProfile' onClick={saveNewUserInfo}>
                    Save
                </a>

                <a className={styles.button} href='/' onClick={deleteAccount}>
                    Delete Account
                </a>


            </div>

        </div>


    )
}