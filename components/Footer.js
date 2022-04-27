import styles from '../styles/Footer.module.css'

export function Footer() {
    return (
        <div className={styles.Footer}>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">CDC Website</a>
            <a href="https://www.covidtests.gov/">Order Free Covid Tests</a>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/faq.html">Questions on Vaccines</a>
        </div>
    );
}