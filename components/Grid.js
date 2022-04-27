import styles from '../styles/Grid.module.css'

export function Grid(props) {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    );
}