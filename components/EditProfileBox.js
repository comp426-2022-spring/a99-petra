import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from '../styles/ProfileBox.module.css';
import { getAuth, onAuthStateChanged, deleteUser } from "firebase/auth";


export function EditProfileBox(props) {
    
    const userData = props.userData;

    const handleFirstnameChange = (event) => {
        setUserData({ ...userData, firstname: event.target.value });
    };

    const handleLastnameChange = (event) => {
        setUserData({ ...userData, lastname: event.target.value });
    };

    const handlePhoneChange = (event) => {
        setUserData({ ...userData, phone: event.target.value });
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
        <div className={styles.profile}>
            <div className={styles.circle}></div>
            <div>
                <input
                    type="text"
                    name="firstname"
                    value={userData != null ? userData.firstname : "loading"}
                    onChange={handleFirstnameChange}
                />
                <br></br>
                <input
                    type="text"
                    name="lastname"
                    value={userData != null ? userData.lastname : "loading"}
                    onChange={handleLastnameChange}
                />
                {/* Add lastname? */}
            </div>
            <br></br>
            <div>
                Email: {userData != null ? userData.email: ""}<br></br>
                Phone: 
                <input
                    type="text"
                    name="phone"
                    value={userData != null ? userData.phone : "loading"}
                    onChange={handlePhoneChange}
                />
            </div>
            <a className={styles.button} href='/simpleProfile' onClick={saveNewUserInfo}>
                Save
            </a>

            <a className={styles.button} href='/' onClick={deleteAccount}>
                Delete Account
            </a>
        </div>
    );
}