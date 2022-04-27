import React, { useEffect, useState } from "react";
import styles from '../styles/dash.module.css';
import { PieChart, Pie, Tooltip, Cell,  Sector} from 'recharts';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {getCovidData} from '../data/covidData'
import axios from "axios";
//To do:
//Variables for Profile
//Dont display profile if signed in
//Legend for graph
//color changes



export default function Home() {
    const [casesInfo, setCasesInfo] = useState(0)
    const [deathInfo, setDeathInfo] = useState(0)

    var loggedIn = false;
    const COLORS = ['#0088FE', '#00C49F'];

    const [pos, setPos] = useState(0)
    const [neg, setNeg] = useState(0)
    
    useEffect(() => { //fired once after things are rendered - as soon as page loads 
        getCovidData(setCasesInfo, setDeathInfo, setPos, setNeg);
    }, [casesInfo], [deathInfo], [pos], [neg]) //array -> use effect fires when this var changes
    

    const data = [
        {name: 'Positive Results', students: pos},
        {name: 'Negative Results', students: neg},
      ];

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

      console.log(getCovidData);

    

    return (
        
        <div className={styles.grid}>
            <div className={styles.header}>
                COVID DASHBOARD
            </div>
            <div className={styles.sidebar}>
                <a className={styles.profile} href="http://localhost:3000/simpleProfile">
                    <div className={styles.circle}>
                    
                    </div>
                    <div className={styles.profInfo}>
                        
                        {userData != null ? userData.firstname : "Create"}
                     <br></br>
                    {userData != null ? userData.lastname: "Account"}</div>
                </a>

                <div className={styles.linkContainer}>
                <a className={styles.linkButton } href="http://localhost:3000/loginMain">
                    Log In
                </a>

                <a className={styles.linkButton} href="/signup">
                    Sign Up
                </a>
                </div>
            </div>
            
            <div className={styles.bigBox}>
                NEGATIVE TESTS VS POSITIVE TEST
                
                <PieChart width={400} height={500}>
                    <Pie data={data} dataKey="students" outerRadius={200} fill= 'aquamarine' />
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Tooltip />
                
                </PieChart>
        
            </div>
            <div className={styles.smallBox1}>
                Current cases:
                <b><div className={styles.stats}>
                {casesInfo} 
                {/* if there are issues look up turnary opperator (like an if else)  */}
                </div></b>

            </div>
            <div className={styles.smallBox2}>
                Current Deaths:
                <b> <div className={styles.stats}> 
                {deathInfo} 
                {/* if there are issues look up turnary opperator (like an if else)  */}
                </div> </b>
            </div> 

            <div className={styles.footer}>
                Links for more recources:
                <div className={styles.footLinks}>
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">CDC Website</a>
                    <a href="https://www.covidtests.gov/">Order Free Covid Tests</a>
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/faq.html">Questions on Vaccines</a>
                </div>
            </div>
        </div>
    )
}