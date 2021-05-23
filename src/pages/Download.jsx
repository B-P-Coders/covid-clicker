import * as styles from "../styles/Download.module.css"

export default function Download() {
    return (
        <div>
            <i className={styles.downloadONE + " fab fa-windows"}></i>
            <i className={styles.downloadTWO + " fab fa-apple"}> </i>
            <i className={styles.downloadTHREE + " fab fa-linux"}> </i>
            <div className={styles.downloadTEXT}>
                <a href="https://github.com/B-P-Coders/covid-clicker-desktop/releases/download/v1.0.0/covid-clicker_win-64_1.0.0.exe">
                    <h1 className={styles.downloadTEXT_ONE}>Windows</h1>
                </a>
                <a href="https://github.com/B-P-Coders/covid-clicker-desktop/releases/download/v1.0.0/covid-clicker_osx-64_1.0.0.dmg">
                    <h2 className={styles.downloadTEXT_TWO}>MAC</h2>
                </a>
                <a href="https://github.com/B-P-Coders/covid-clicker-desktop/releases/download/v1.0.0/linux64.tar.gz">
                    <h3 className={styles.downloadTEXT_THREE}><b>Linux</b></h3>
                </a>
            </div>
        </div>

    )
}