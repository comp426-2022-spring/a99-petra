import React, { useEffect, useState } from "react";
import styles from '../styles/profile.module.css';

export default function Home() {
    return (
        <div className={styles.contain}>
            <div className={styles.profile}>
                <div className={styles.circle}>
                
                </div>
                <div>
                    Winfield Warren
                </div>

                <div>
                    Last Login Date: XX/XX/XXXX <br></br>
                    Email: jkhdskfhskj@jkh.com <br></br>
                    Phone: 333-333-3333 <br></br>
                </div>

                <a className={styles.button}>
                    Edit Info
                </a>

                <a className={styles.button}>
                    Log Out
                </a>
            </div>

        </div>

            
    )
}