import * as styles from "../styles/Foot.module.css";

export default function Foot() {
  return (
    <div className={styles.foot}>
      © Copyright B&P Studio {new Date().getFullYear()}
    </div>
  );
}
