import React, { useEffect, useState } from "react";
import styles from '../styles/Dashboard.module.css';
import { PieChart, Pie, Tooltip, Cell,  Sector, ResponsiveContainer} from 'recharts';

import {getCovidData} from '../data/covidData'

//To do:
//Variables for Profile
//Dont display profile if signed in
//Legend for graph
//color changes

export function Dashboard() {
    const [casesInfo, setCasesInfo] = useState(0)
    const [deathInfo, setDeathInfo] = useState(0)

    var loggedIn = false;

    const [pos, setPos] = useState(0)
    const [neg, setNeg] = useState(0)
    
    useEffect(() => { //fired once after things are rendered - as soon as page loads 
        getCovidData(setCasesInfo, setDeathInfo, setPos, setNeg);
    }, [casesInfo], [deathInfo], [pos], [neg]) //array -> use effect fires when this var changes
    

    const data = [
        {name: 'Positive Results', fill: '#e04c65', students: pos},
        {name: 'Negative Results', fill: '#00C49F', students: neg},
    ];

    console.log(getCovidData);

    return (
        <div className={styles.grid}>
            <div className={styles.bigBox}>
                <h2>NEGATIVE TESTS VS POSITIVE TEST</h2>
                <ResponsiveContainer width="100%" height="80%">
                    <PieChart height="100%">
                        <Pie data={data} dataKey="students" outerRadius="90%" fill= 'aquamarine' />
                        
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
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
        </div>
    );
}