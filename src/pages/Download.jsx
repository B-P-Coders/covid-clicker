import ReactGA from 'react-ga';
import * as styles from "../styles/Download.module.css"
import DownloadBtn from "../components/DownloadBtn.jsx"

ReactGA.initialize('G-LM6F4L305Y');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function Download() {
    return (
        <div className={styles.main}>
            <DownloadBtn name = "Windows" link = "https://github.com/B-P-Coders/covid-clicker-desktop/releases/download/v1.0.0/covid-clicker_win64-1.0.0.exe" icon = "fab fa-windows" font = "Segoe"/>
            <DownloadBtn name = "MAC" link = "https://github.com/B-P-Coders/covid-clicker-desktop/releases/download/v1.0.0/covid-clicker_osx-64_1.0.0.dmg" icon = "fab fa-apple"/>
            <DownloadBtn name = "Linux" link = "https://github.com/B-P-Coders/covid-clicker-desktop/releases/download/v1.0.0/linux64.tar.gz" icon = "fab fa-linux" font = "Edwardian Script ITC"/>
        </div>

    )
}
