import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from '../styles/ProfileBox.module.css';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Router from "next/router";
import { ImCross } from 'react-icons/im';
import Link from "next/link";



export function ProfileBox(props) {

    const userData = props.userData;

    const signOutUser = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("signout successful")
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className={styles.profile}>
            <Link href="/simpleDashboard">
                <div className={styles.exitButton}>
                    <ImCross></ImCross>
                </div>
            </Link>
            <div className={styles.circle}></div>
            <div>
                {userData != null ? userData.firstname : ""}
                <br></br>
                {userData != null ? userData.lastname : ""}
            </div>

            <div>
                Last Login Date: {userData != null ? userData.lastLoginDate : ""} <br></br>
                Email: {userData != null ? userData.email : ""}<br></br>
                Phone: {userData != null ? userData.phone : ""} <br></br>
            </div>

            <a className={styles.button} href='editprofile'>
                Edit Info
            </a>

            <a className={styles.button} onClick={signOutUser}>
                Log Out
            </a>
        </div>
    );
}