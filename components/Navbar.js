import styles from '../styles/Navbar.module.css'

export function Navbar(props) {
  const userData = props.userData;

  const path = userData == null ? 'login' : 'profile';

  return (
    <div id={styles.navbar}>
        <div id={styles.navbar_content}>
          <img src="placeholder.png" />
          <div id={styles.navbar_profile}>
            <div id={styles.profile_box}>
              <p>{userData != null ? userData.firstname + ' ' + userData.lastname : "login to view profile" }</p>
              <a id={styles.circle} href={path}>
                <div id={styles.initials}>
                  {userData != null ? `${userData.firstInitial}${userData.lastInitial}` : "?"}
                </div>
              </a>
              <a href={path}>{userData != null ? "view profile" : "login"}</a>
            </div>
          </div>
          <div id={styles.navbar_links}>
            <a href="/">home</a>
            <a href="dashboard">dashboard</a>
          </div>
        </div>
      </div>
  );
}