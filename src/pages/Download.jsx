import * as styles from "../styles/Download.module.css"

export default function Download() {
    return (
        <div>
            <i className={styles.downloadONE + " fab fa-windows"}></i>
            <i className={styles.downloadTWO + " fab fa-apple"}> </i>
            <i className={styles.downloadTHREE + " fab fa-linux"}> </i>
            <div className={styles.downloadTEXT}>

                <hr1 className={styles.downloadTEXT_ONE}>Windows</hr1>
                <hr2 className={styles.downloadTEXT_TWO}>MAC</hr2>
                <hr3 className={styles.downloadTEXT_THREE}><b>Linux</b></hr3>

            </div>
        </div>

    )
}