import React, { useEffect, useState } from "react";
import styles from '../styles/dash.module.css';

export default function Home() {
    return (
        <div className={styles.grid}>
            <div className={styles.header}>
                HEADER
            </div>
            <div className={styles.sidebar}>
                <a className={styles.profile} href="http://localhost:3000/simpleProfile">
                    <div className={styles.circle}>
                    
                    </div>
                    <div className={styles.profInfo}>Winfield Warren</div>
                </a>

                <div className={styles.linkContainer}>
                <a className={styles.linkButton } href="http://localhost:3000/loginMain">
                    Log In
                </a>

                <a className={styles.linkButton}>
                    Sign Up
                </a>
                </div>
            </div>
            
            <div className={styles.bigBox}>
                THIS IS THE BIG BOX - MAYBE GRAPH OR PIE CHART HERE
                <div className={styles.circle2}>
                    
                    </div>
            </div>
            <div className={styles.smallBox1}>
                THIS IS SMALL BOX 1 FOR SOME STATS
            </div>
            <div className={styles.smallBox2}>
                THIS IS SMALL BOX 2 FOR SOME STATS
            </div> 

            <div className={styles.footer}>
                THIS IS A PLACEHOLDER FOR THE FOOTER
            </div>
        </div>
    )
}