import styles from '../styles/Page.module.css';
import { Navbar } from './Navbar';
import { Content } from './Content';
import { Footer } from './Footer';

export function Page(props) {
    let layout_class = "layout_" + props.layout;
    let page_elements = "";

    if (props.layout == "0") {
        page_elements = (
            <div className={styles[layout_class]}>
                <Navbar></Navbar>
                <Content layout={props.layout}>
                    {props.children}
                </Content>
                <Footer></Footer>
            </div>
        );
    } else if (props.layout == "1") {
        page_elements = (
            <div className={styles[layout_class]}>
                <Content layout={props.layout}>
                    {props.children}
                </Content>
            </div>
        );
    }

    return (
        <body>
            <div className={styles.main}>
                {page_elements}
            </div>
        </body>
    );
}