import styles from '../styles/Navbar.module.css'

export function Navbar() {
    return (
        <div id={styles.navbar}>
            <div id={styles.navbar_content}>
              <img src="placeholder.png" />
              <div id={styles.navbar_profile}>
                <div id={styles.profile_box}>
                  <p>john martin</p>
                  <a id={styles.circle} href="profile.html">jm</a>
                  <a href="profile">view profile</a>
                </div>
              </div>
              <div id={styles.navbar_links}>
                <a href="/" class="active">home</a>
                <a href="dashboard">dashboard</a>
              </div>
            </div>
          </div>
    );
}