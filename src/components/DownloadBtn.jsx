import * as styles from "../styles/DownloadBtn.module.css"

export default function DownloadBtn({name, link, icon, font}) {
    return (
        <div className = {styles.main}>
            <i className={styles.icon + " " + icon}> </i>

            <a href={link}>
                <hr1 className={styles.text} style = {{fontFamily: font}}>{name} </hr1>
            </a>
        </div>

    )

}