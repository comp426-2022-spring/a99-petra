import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";

export function getUserData() {
    const [userData, setUserData] = useState(null);
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
        } else {
            // User is signed out
            console.log('user signed out')
        }
        });
    });
    return userData;
}