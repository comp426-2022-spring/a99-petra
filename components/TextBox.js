import styles from '../styles/TextBox.module.css'

export function TextBox(props) {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    );
}