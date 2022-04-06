import getFirebaseClient from '../firebase/firebase'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
 
  let app = getFirebaseClient();

  return <Component {...pageProps} />
}

export default MyApp
