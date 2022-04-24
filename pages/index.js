import styles from '../styles/general.module.css'
import React, { useState } from 'react'

export default function Home() {
  return (
    <div id={styles.main}>
      <body>
        <div id={styles.grid}>

          <div id={styles.navbar}>
            <div id={styles.navbar_content}>
              <img src="placeholder.png" />
              <div id={styles.navbar_profile}>
                <div id={styles.profile_box}>
                  <p>john martin</p>
                  <a id={styles.circle} href="profile.html">jm</a>
                  <a href="profile.html">view profile</a>
                </div>
              </div>
              <div id={styles.navbar_links}>
                <a href="home.html" class="active">home</a>
                <a href="dashboard.html">dashboard</a>
              </div>
            </div>
          </div>

          <div id={styles.content}>
            <div id={styles.about}>
              <p>Team Petra</p>
              <p>Created By: Andrew Byerle, Ashwin Yerramsetty, Matthew Bare, Sofia Wong, Winfield Warren</p>
              <p>Description:</p>
            </div>
          </div>

          <div id={styles.footer}>

          </div>
        </div>
      </body>
    </div>
  )

}
