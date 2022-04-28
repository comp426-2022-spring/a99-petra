import styles from '../styles/Content.module.css'

export function Content(props) {
    let layout_class = "layout_" + props.layout;

    return (
        <div className={styles[layout_class]}>
            {props.children}
        </div>
    );
}