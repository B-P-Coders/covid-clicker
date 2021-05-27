import * as styles from "../styles/DownloadBtn.module.css"

export default function DownloadBtn({name, link, icon, font}) {
    return (
        <div className = {styles.main}>
            <a href={link}>
                <i className={styles.icon + " " + icon}> </i>
            </a>
        </div>

    )

}